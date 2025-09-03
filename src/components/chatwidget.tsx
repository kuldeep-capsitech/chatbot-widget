import { useState, useEffect, useRef } from 'preact/hooks';
import { dateParser } from "@biswarup598/date-parser";
import { GoogleGenAI } from "@google/genai";
import FaqSkeleton from './skeleton';
import { api } from '../api';
import { bot_icon, close_icon, send_icon } from '../assets/svg';

export default function ChatWidget() {
    // UI States
    const [showBotIcon, setShowBotIcon] = useState(true);
    const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
    const [isFaqOpen, setIsFaqOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isAgentOpen, setIsAgentOpen] = useState(false);


    // auto-scroll
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            el.scrollTop = el.scrollHeight;
        }
    });


    // Messages & Input
    const [messages, setMessages] = useState<Messages[]>([
        { id: 1, type: 'bot', text: 'Hi! How can I help you?', time: dateParser(Date.now())[1], isLoading: false }
    ]);
    const [inputValue, setInputValue] = useState('');

    // FAQ State
    const [faqs, setFaqs] = useState<Faq[]>([]);
    const [faqLoading, setFaqLoading] = useState(true);
    const [faqDepth, setFaqDepth] = useState(0);

    // Google AI Setup
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_KEY });

    /** ---- API FUNCTIONS ---- **/



    // Fetch initial FAQs
    async function fetchFaqs() {
        try {
            const res = await api.get("/Chat/start", {
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
            console.log(res.data?.result)
            setFaqs(res.data?.result?.questions);
            setFaqLoading(false);
            setFaqDepth(0);
        } catch (err) {
            console.error(err);
        }
    }

    // Fetch bot response for selected FAQ
    async function fetchFaqByQuestion(question: string) {
        try {
            const res = await api.post(`/Chat/GetbyQuestion`, JSON.stringify(question), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const optionsData = res.data?.result?.options;

            setFaqDepth(prev => prev + 1);

            // Add bot response message
            const botMessage = {
                id: Date.now(),
                type: 'bot',
                text: res.data?.result?.answer,
                time: dateParser(Date.now())[1],
                isLoading: false
            };
            setMessages(prev => [...prev, botMessage]);

            // (Optional) Add inline FAQ options in chat
            if (optionsData && optionsData.length > 0) {
                const faqOptionsMessage = {
                    id: Date.now() + 1,
                    type: 'faq-options',
                    options: optionsData,
                    time: dateParser(Date.now())[1],
                    isLoading: false
                };
                setMessages(prev => [...prev, faqOptionsMessage]);
            }
        } catch (err) {
            console.error(err);
        }
    }

    // Handle user free-text chat with Google AI
    async function chat() {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: inputValue
        });
        return response.text;
    }

    /** ---- EVENT HANDLERS ---- **/

    function handleFaqClick(question: string) {
        openChat();

        const userMessage = {
            id: Date.now(),
            type: 'user',
            text: question,
            time: dateParser(Date.now())[1],
            isLoading: false
        };

        if (isChatOpen) {
            setMessages(prev => [...prev.slice(0, -1), userMessage]);
        } else {
            setMessages(prev => [...prev, userMessage]);
        }

        setInputValue('');

        if (isFaqOpen) {
            setFaqs(prevFaqs => prevFaqs.filter(faq => faq.question !== question));
        }

        fetchFaqByQuestion(question);
    }

    // function handleFaqBackToStart() {
    //     setFaqLoading(true);
    //     fetchFaqs();
    // }

    function toggleWelcome() {
        if (!isWelcomeOpen) setIsFaqOpen(false)
        setIsWelcomeOpen(prev => !prev);
    }

    function openFaq() {
        setIsWelcomeOpen(false);
        setIsFaqOpen(true);
        setIsChatOpen(false);
        setIsAgentOpen(false);
        fetchFaqs();
    }

    function openChat() {
        setIsWelcomeOpen(false);
        setIsFaqOpen(false);
        setIsChatOpen(true);
        setIsAgentOpen(false);
        setShowBotIcon(false);
    }

    function openAgent() {
        setIsWelcomeOpen(false);
        setIsFaqOpen(false);
        setIsChatOpen(false);
        setIsAgentOpen(true);
        setShowBotIcon(false);
    }

    const handleFaqBackToStart = () => {
        setFaqLoading(true);
        setFaqDepth(0);
        fetchFaqs();
    };

    const closeChat = () => {
        setIsAgentOpen(false);
        setIsChatOpen(false);
        setShowBotIcon(true);
        setMessages([{ id: 1, type: 'bot', text: 'Hi! How can I help you?', time: dateParser(Date.now())[1], isLoading: false }])
    }

    // Handle user input message send
    function sendMessage() {
        if (!inputValue.trim()) return;

        const newMessage = {
            id: Date.now(),
            type: 'user',
            text: inputValue,
            time: dateParser(Date.now())[1],
            isLoading: false
        };
        setMessages(prev => [...prev, newMessage]);
        setInputValue('');

        // Add loading indicator for bot response
        const loaderId = Date.now() + 1;
        const loadingMessage = { id: loaderId, type: 'bot', text: "", time: dateParser(Date.now())[1], isLoading: true };
        setMessages(prev => [...prev, loadingMessage]);

        // Get AI response
        chat().then(res => {
            setMessages(prev =>
                prev.map(msg =>
                    msg.id === loaderId ? { ...msg, text: res, isLoading: false } : msg
                )
            );
        });
    }

    /** ---- INITIALIZATION ---- **/
    useEffect(() => {
        const payload = document.getElementById('my-script')?.getAttribute('data-payload') || 'hi';
        const position = document.getElementById('my-script')?.getAttribute('data-position') || 'right';

        if (position === 'left') {
            document.documentElement.style.setProperty('--host-left', '1%');
        } else {
            document.documentElement.style.setProperty('--host-right', '1%');
        }

        console.log('payload id: ' + payload);
    }, []);

    /** ---- RENDER ---- **/
    return (
        <div id="chat-root">
            {/* Floating Chat Icon */}
            {showBotIcon && (
                <div className="chat-icon" role="button" onClick={toggleWelcome}>
                    {bot_icon}
                </div>
            )}

            {/* Welcome Popup */}
            {isWelcomeOpen && (
                <div className="welcome-box fly-y">
                    <div className="welcome">
                        <h1>Welcome to our website!</h1>
                        <p>Nice to meet you! If you have any question about our services, feel free to contact us.</p>
                    </div>
                    <div className="welcome-2">
                        <div className="faq" onClick={openFaq}>FAQ</div>
                        <div className="talk" onClick={openChat}>Let's Talk</div>
                    </div>
                </div>
            )}

            {/* FAQ Section */}
            {isFaqOpen && (
                <div className="faq-box">
                    <div className="faq-options">
                        <ul className="faq-options-li">
                            {faqLoading ? (
                                <FaqSkeleton />
                            ) : (
                                faqs.map((faq, index) => (
                                    <li key={index} onClick={() => handleFaqClick(faq.question)}>
                                        {faq.question}
                                    </li>
                                ))
                            )}
                            <div className="faq-header">

                                {faqDepth > 0 && (
                                    <button className="back-to-start" onClick={handleFaqBackToStart} aria-label="Back to start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
                                        <span>Back to Start</span>
                                    </button>
                                )}
                            </div>
                            {/* dfsjbksdjf */}
                            <div className="faq-header">
                                {faqDepth > 0 && (
                                    <button className="back-to-start" onClick={handleFaqBackToStart}>Back to Start</button>
                                )}
                            </div>
                            <div id="talk-btn" onClick={openAgent}>Can I talk to someone?</div>
                        </ul>
                    </div>
                </div>
            )}

            {/* Chat Section */}
            {isChatOpen && (
                <div className="chat-dialog fly-x">
                    <div className="chat-header">
                        <div>
                            <h1>ChatFlow</h1>
                            <p>A live chat interface for seamless communication.</p>
                        </div>
                        <div className="cross" role="button" onClick={closeChat}>
                            {close_icon}
                        </div>
                    </div>

                    <div className="chat-body">
                        {/* Messages */}
                        <div className="messages" ref={scrollRef}>
                            {messages.map((msg, index) => (
                                <div key={index}>
                                    {msg.type === 'faq-options' ? (
                                        <div className="faq-inline-options">
                                            {msg.options.map((option: Faq, idx: number) => (
                                                <button key={idx} className="faq-inline-btn" onClick={() => handleFaqClick(option.question)}>
                                                    {option.question}
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className={msg.type === 'bot' ? (msg.isLoading ? "loader-wrapper" : 'bot-msg') : 'user-msg'}>
                                            {msg.isLoading ? <span className="loader"></span> : msg.text}
                                        </p>
                                    )}
                                    <div className={msg.type === 'bot' ? 'bot-time' : 'user-time'}>{msg.time}</div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="input">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={inputValue}
                                onInput={e => setInputValue(e.currentTarget.value)}
                                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                            />
                            <button className="send" onClick={sendMessage}>
                                {send_icon}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Agent Section */}
            {isAgentOpen && (
                <div className="chat-dialog fly-x">
                    <div className="chat-header">
                        <div>
                            <h1>ChatFlow</h1>
                            <p>A live chat interface for seamless communication.</p>
                        </div>
                        <div className="cross" role="button" onClick={closeChat}>
                            {close_icon}
                        </div>
                    </div>
                    <div className="chat-body">
                        <div className="messages">
                            <p className="bot-msg">Thanks for joining us! Let's start by getting your name.</p>
                            {messages.map((msg, index) => (
                                <p key={index} className={msg.type === 'bot' ? (msg.isLoading ? "loader-wrapper" : 'bot-msg') : 'user-msg'}>
                                    {msg.isLoading ? <span className="loader"></span> : msg.text}
                                </p>
                            ))}
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={inputValue}
                                onInput={e => setInputValue(e.currentTarget.value)}
                                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                            />
                            <button className="send" onClick={sendMessage}>{send_icon}</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}