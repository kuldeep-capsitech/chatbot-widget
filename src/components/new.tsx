import { useState, useEffect, useRef } from 'preact/hooks';
import { dateParser } from "@biswarup598/date-parser";
import { GoogleGenAI } from "@google/genai";
import FaqSkeleton from './skeleton';
import type { Faq } from '../types/widgetTypes';
import axios from 'axios';
import { api } from '../api';

export default function ChatWidget() {
    const [showBot, setShowBot] = useState(true);
    const [open, setOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(false);
    const [openChat, setOpenChat] = useState(false);
    const [openAgent, setOpenAgent] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: 'Hi! How can I help you?', time: dateParser(Date.now())[1], isLoading: false }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [faqLoading, setFaqLoading] = useState(true);
    const [faqDepth, setFaqDepth] = useState(0);
    const [faqs, setFaqs] = useState<Faq[]>([]);

    const messagesRef = useRef<HTMLDivElement | null>(null);

    const key = import.meta.env.VITE_KEY;
    const ai = new GoogleGenAI({ apiKey: key });

    function generateId() {
        return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    }

    async function chat() {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: inputValue,
        });
        // defensive: if response.text exists return it, otherwise try response.content/response.outputText
        return response?.text ?? response?.content ?? response?.outputText ?? '';
    }

    async function fetchFaqs() {
        try {
            setFaqLoading(true);
            const res = await api.get("/Chat/rootquestion");
            setFaqs(res.data.result);
        } catch (err) {
            console.error(err);
        } finally {
            setFaqLoading(false);
            setFaqDepth(0);
        }
    }

    /**
     * Refactored to return the API result so callers (like handleFaqClick)
     * can parse the response and show the bot reply in chat.
     */
    async function fetchFaqByQuestion(question: string) {
        try {
            setFaqLoading(true);
            const res = await api.post(`/Chat/GetbyQuestion?question=${encodeURIComponent(question)}`, {});
            // attempt to set sub-options if available
            const result = res.data?.result;
            if (result?.bot?.options && Array.isArray(result.bot.options)) {
                setFaqs(result.bot.options);
            }
            setFaqDepth(prev => prev + 1);
            return result;
        } catch (err) {
            console.error(err);
            return null;
        } finally {
            setFaqLoading(false);
        }
    }

    const handleFaqBackToStart = () => {
        setFaqLoading(true);
        setFaqDepth(0);
        fetchFaqs();
    };

    const handleOpen = () => setOpen(prev => !prev);

    const handleOpenFaq = () => {
        setOpen(false);
        setOpenFaq(true);
        setOpenChat(false);
        setOpenAgent(false);
        fetchFaqs();
    };

    const handleOpenChat = () => {
        setOpen(false);
        setOpenFaq(false);
        setOpenChat(true);
        setOpenAgent(false);
        setShowBot(false);
    };

    const handleOpenAgent = () => {
        setOpen(false);
        setOpenFaq(false);
        setOpenChat(false);
        setOpenAgent(true);
        setShowBot(false);
    };

    // When messages change, keep scroll at bottom
    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [messages]);

    // Handler that mixes: open chat, show question as user message, call API, update bot loader with answer.
    const handleFaqClick = async (question: string) => {
        // open chat panel and hide faq
        setOpen(false);
        setOpenFaq(false);
        setOpenChat(true);
        setOpenAgent(false);
        setShowBot(false);

        // add user message (the clicked question)
        const userMsg = {
            id: generateId(),
            type: 'user',
            text: question,
            time: dateParser(Date.now())[1],
            isLoading: false
        };
        setMessages(prev => [...prev, userMsg]);

        // add loading bot message
        const loaderId = generateId();
        const loadingMessage = {
            id: loaderId,
            type: 'bot',
            text: "",
            time: dateParser(Date.now())[1],
            isLoading: true
        };
        setMessages(prev => [...prev, loadingMessage]);

        // call API via the refactored function
        const result = await fetchFaqByQuestion(question);

        // parse the API response defensively for common shapes
        let botText = '';
        if (result) {
            const bot = result.bot ?? {};

            if (typeof bot.answer === 'string' && bot.answer.trim()) {
                botText = bot.answer;
            } else if (typeof bot.text === 'string' && bot.text.trim()) {
                botText = bot.text;
            } else if (typeof bot.response === 'string' && bot.response.trim()) {
                botText = bot.response;
            } else if (Array.isArray(bot.options) && bot.options.length) {
                // show options as simple numbered list in chat (user can click FAQ again to dive deeper)
                botText = 'I found these options:\n' + bot.options.map((o: any, i: number) => {
                    // try to surface a readable label
                    return `${i + 1}. ${o.question ?? o.title ?? o.label ?? JSON.stringify(o)}`;
                }).join('\n');
            } else if (typeof result.answer === 'string' && result.answer.trim()) {
                botText = result.answer;
            } else if (typeof result.text === 'string' && result.text.trim()) {
                botText = result.text;
            } else {
                botText = "Sorry — I couldn't find a direct answer for that FAQ. You can try another option or ask to talk to an agent.";
            }
        } else {
            botText = "Sorry — I couldn't fetch the FAQ answer right now. Please try again or contact support.";
        }

        // replace loader with actual bot response
        setMessages(prev =>
            prev.map(msg =>
                msg.id === loaderId ? { ...msg, text: botText, isLoading: false } : msg
            )
        );
    };

    const sendMessage = () => {
        if (!inputValue.trim()) return;
        const newMessage = { id: generateId(), type: 'user', text: inputValue, time: dateParser(Date.now())[1], isLoading: false };
        setMessages(prev => [...prev, newMessage]);
        setInputValue('');

        const loaderId = generateId();
        const loadingMessage = { id: loaderId, type: 'bot', text: "", time: dateParser(Date.now())[1], isLoading: true };
        setMessages(prev => [...prev, loadingMessage]);

        chat().then((res) => {
            setMessages(prev =>
                prev.map(msg =>
                    msg.id === loaderId
                        ? { ...msg, text: res, isLoading: false }
                        : msg
                )
            );
        }).catch(err => {
            console.error(err);
            setMessages(prev =>
                prev.map(msg =>
                    msg.id === loaderId
                        ? { ...msg, text: "Sorry — something went wrong.", isLoading: false }
                        : msg
                )
            );
        });
    };

    useEffect(() => {
        let payload =
            document.getElementById('my-script')?.getAttribute('data-payload') ||
            'hi';
        const position =
            document.getElementById('my-script')?.getAttribute('data-position') ||
            'right';

        if (position === 'left') {
            document.documentElement.style.setProperty('--host-left', '1%');
        } else {
            document.documentElement.style.setProperty('--host-right', '1%');
        }

        console.log('payload id: ' + payload);
    }, []);

    return (
        <div id="chat-root">
            {/* Chat Icon */}
            {showBot && (
                <div
                    className="chat-icon"
                    aria-live="polite"
                    aria-label="Chat"
                    role="button"
                    onClick={handleOpen}
                    onKeyDown={e => e.key === 'Enter' && handleOpen()}
                >
                    {/* (SVG omitted for brevity — keep as-is) */}
                    <svg width="75" height="68" viewBox="0 0 75 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* ... keep your existing SVG paths here ... */}
                    </svg>
                </div>
            )}

            {/* Welcome Popup */}
            {open && (
                <div className="welcome-box fly-y">
                    <div className="welcome">
                        <h1>Welcome to our website!</h1>
                        <p>
                            Nice to meet you! If you have any question about our
                            services, feel free to contact us.
                        </p>
                    </div>
                    <div className="welcome-2">
                        <div
                            className="faq"
                            onClick={handleOpenFaq}
                            role="button"
                        >
                            FAQ
                        </div>
                        <div
                            className="talk"
                            onClick={handleOpenChat}
                            role="button"
                        >
                            Let's Talk
                        </div>
                    </div>
                </div>
            )}

            {/* FAQ Section */}
            {openFaq && !open && (
                <div className="faq-box">
                    <div className="faq-options">
                        <ul className="faq-options-li">
                            {faqLoading ? <FaqSkeleton /> : faqs.map((faq, index) => (
                                // use handleFaqClick so clicking an item moves to chat and fetches answer
                                <li key={faq.question ?? index} onClick={() => handleFaqClick(faq.question)}>{faq.question}</li>
                            ))}

                            <div className="faq-header">
                                {faqDepth > 0 && (
                                    <button className="back-to-start" onClick={handleFaqBackToStart} aria-label="Back to start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
                                        <span>Back to Start</span>
                                    </button>
                                )}
                            </div>
                            <div
                                id="talk-btn"
                                onClick={handleOpenAgent}
                                role="button"
                            >
                                Can I talk to someone?
                            </div>
                        </ul>
                    </div>
                </div>
            )}

            {/* Dynamic Chat Section */}
            {openChat && !open && (
                <div className="chat-dialog fly-x">
                    <div className="chat-header">
                        <div>
                            <h1>ChatFlow</h1>
                            <p>
                                A live chat interface that allows for seamless,
                                natural communication and connection.
                            </p>
                        </div>
                        <div
                            className="cross"
                            role="button"
                            onClick={() => {
                                setOpenChat(false);
                                setShowBot(true);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                        </div>
                    </div>

                    <div className="chat-body">
                        <div className="messages" ref={messagesRef}>
                            {messages.map((msg) => (
                                <div key={msg.id}>
                                    <p
                                        className={
                                            msg.type === 'bot'
                                                ? msg.isLoading === true ? "loader-wrapper" : 'bot-msg'
                                                : 'user-msg'
                                        }
                                    >
                                        {msg.isLoading ? (
                                            <span className="loader"></span>
                                        ) : (
                                            msg.text
                                        )}
                                    </p>
                                    <div className={
                                        msg.type === 'bot'
                                            ? 'bot-time'
                                            : 'user-time'
                                    }>{msg.time}</div>
                                </div>
                            ))}
                        </div>

                        <div className="input">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={inputValue}
                                onInput={e =>
                                    setInputValue(e.currentTarget.value)
                                }
                                onKeyDown={e =>
                                    e.key === 'Enter' && sendMessage()
                                }
                            />
                            <button
                                type="submit"
                                className="send"
                                onClick={sendMessage}
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.176834 0.118496C0.329527 -0.0108545 0.544637 -0.0367025 0.723627 0.0527924L13.7236 6.55279C13.893 6.63748 14 6.81061 14 7C14 7.18939 13.893 7.36252 13.7236 7.44721L0.723627 13.9472C0.544637 14.0367 0.329527 14.0109 0.176834 13.8815C0.0241407 13.7522 -0.0367196 13.5442 0.0221319 13.353L1.97688 7L0.0221319 0.647048C-0.0367196 0.455781 0.0241407 0.247847 0.176834 0.118496ZM2.8693 7.5L1.32155 12.5302L12.382 7L1.32155 1.46979L2.8693 6.5H8.50001C8.77615 6.5 9.00001 6.72386 9.00001 7C9.00001 7.27614 8.77615 7.5 8.50001 7.5H2.8693Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Agent Section */}
            {openAgent && !open && (
                <div className="chat-dialog fly-x">
                    <div className="chat-header">
                        <div>
                            <h1>ChatFlow</h1>
                            <p>
                                A live chat interface that allows for seamless,
                                natural communication and connection.
                            </p>
                        </div>
                        <div
                            className="cross"
                            role="button"
                            onClick={() => {
                                setOpenAgent(false);
                                setOpenFaq(false);
                                setShowBot(true);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                        </div>
                    </div>
                    <div className="chat-body">
                        <div className="messages">
                            <p className="bot-msg">
                                Thanks for joining us! Let's start by getting
                                your name.
                            </p>
                            <div className="messages">
                                {messages.map((msg) => (
                                    <p
                                        key={msg.id}
                                        className={
                                            msg.type === 'bot'
                                                ? msg.isLoading === true ? "loader-wrapper" : 'bot-msg'
                                                : 'user-msg'
                                        }
                                    >
                                        {msg.isLoading ? (
                                            <span className="loader"></span>
                                        ) : (
                                            msg.text
                                        )}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={inputValue}
                                onInput={e =>
                                    setInputValue(e.currentTarget.value)
                                }
                                onKeyDown={e =>
                                    e.key === 'Enter' && sendMessage()
                                }
                            />
                            <button
                                type="submit"
                                className="send"
                                onClick={sendMessage}
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.176834 0.118496C0.329527 -0.0108545 0.544637 -0.0367025 0.723627 0.0527924L13.7236 6.55279C13.893 6.63748 14 6.81061 14 7C14 7.18939 13.893 7.36252 13.7236 7.44721L0.723627 13.9472C0.544637 14.0367 0.329527 14.0109 0.176834 13.8815C0.0241407 13.7522 -0.0367196 13.5442 0.0221319 13.353L1.97688 7L0.0221319 0.647048C-0.0367196 0.455781 0.0241407 0.247847 0.176834 0.118496ZM2.8693 7.5L1.32155 12.5302L12.382 7L1.32155 1.46979L2.8693 6.5H8.50001C8.77615 6.5 9.00001 6.72386 9.00001 7C9.00001 7.27614 8.77615 7.5 8.50001 7.5H2.8693Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
