import { useState, useEffect, useRef } from 'preact/hooks';
import { dateParser } from "@biswarup598/date-parser";
import FaqSkeleton from './skeleton';
import { api } from '../api';
import { bot_icon, close_icon, send_icon } from '../assets/svg';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import FaqFeedbackModal from './faq-feedback';

export default function ChatWidget() {

    /*----------------------------------------- UI STATES --------------------------------------------------*/
    const [showBotIcon, setShowBotIcon] = useState(true);
    const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
    const [isFaqOpen, setIsFaqOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isAgentOpen, setIsAgentOpen] = useState(false);
    const [faqs, setFaqs] = useState<Faq[]>([]);
    const [faqLoading, setFaqLoading] = useState(true);
    const [faqDepth, setFaqDepth] = useState(0);
    const [touched, setTouched] = useState(false);
    const [messages, setMessages] = useState<Messages[]>([
        {
            id: "",
            type: 'bot',
            text: 'Hi! How can I help you?',
            time: dateParser(Date.now())[1],
            isLoading: false
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [companyId, setCompanyId] = useState('');
    const [chatSpace, setChatSpace] = useState(true);
    const [faqFb, setFaqFb] = useState(false);

    /** --------------------------------------------- INITIALIZATION ------------------------------------ **/
    useEffect(() => {
        setCompanyId(document.getElementById('my-script')?.getAttribute('data-companyId') || 'hi');
        const position = document.getElementById('my-script')?.getAttribute('data-position') || 'right';

        if (position === 'left') {
            document.documentElement.style.setProperty('--host-left', '1%');
        } else {
            document.documentElement.style.setProperty('--host-right', '1%');
        }
    }, []);

    // auto-scroll
    const scrollRef = useRef(null);
    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            el.scrollTop = el.scrollHeight;
        }
    }, [messages.length]);


    const iconRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const handleMouseMove = (e: MouseEvent) => {
    //         const icon = iconRef.current;
    //         if (!icon) return;

    //         const rect = icon.getBoundingClientRect();
    //         const iconX = rect.left + rect.width / 3;
    //         const iconY = rect.top + rect.height / 3;

    //         const dist = Math.sqrt(
    //             Math.pow(e.clientX - iconX, 2) + Math.pow(e.clientY - iconY, 2)
    //         );

    //         if (dist<60) {
    //             const newX = Math.random() * (window.innerWidth - rect.width);
    //             const newY = Math.random() * (window.innerHeight - rect.height);

    //             icon.style.position = "fixed";
    //             icon.style.left = `${newX}px`;
    //             icon.style.top = `${newY}px`;
    //         }
    //     };

    //     document.addEventListener("mousemove", handleMouseMove);
    //     return () => document.removeEventListener("mousemove", handleMouseMove);
    // }, []);

    /*----------------------------------------- TANSTACK QUERY --------------------------------------------*/
    const queryClient = useQueryClient();

    const { data, isLoading, isRefetchError, isLoadingError } = useQuery({
        queryKey: ['faqs'],
        queryFn: fetchFaqs,
        enabled: touched
    })

    const faqMutation = useMutation({
        mutationFn: async (questionId: string) => {
            const res = await api.post(`/Chat/GetFaqByQuestion`, { companyId, questionId });
            return res;
        },
        onSuccess: (res) => {
            const optionsData = res.data?.result?.options;

            setFaqDepth(prev => prev + 1);

            // replace loading with bot message
            const botMessage = {
                id: Date.now().toString(),
                type: 'bot',
                text: res.data?.result?.answer || "Sorry I don't have the answer!",
                time: dateParser(Date.now())[1],
                isLoading: false
            };
            setMessages(prev => [...prev.slice(0, -1), botMessage]);

            // Add inline FAQ options in chat, or Back to Start button if no options or no text and options
            if (!res.data?.result?.answer && (!optionsData || optionsData.length === 0)) {
                const backToStartMessage = {
                    id: (Date.now() + 1).toString(),
                    type: 'back-to-start',
                    time: dateParser(Date.now())[1],
                    isLoading: false
                };
                setMessages(prev => [...prev, backToStartMessage]);
            } else if (!optionsData || optionsData.length === 0) {
                const backToStartMessage = {
                    id: (Date.now() + 1).toString(),
                    type: 'back-to-start',
                    time: dateParser(Date.now())[1],
                    isLoading: false
                };
                setMessages(prev => [...prev, backToStartMessage]);
            } else if (optionsData && optionsData.length > 0) {
                const faqOptionsMessage = {
                    id: (Date.now() + 1).toString(),
                    type: 'faq-options',
                    options: optionsData,
                    time: dateParser(Date.now())[1],
                    isLoading: false
                };
                setMessages(prev => [...prev, faqOptionsMessage]);
            }

            queryClient.invalidateQueries({ queryKey: ['faqs'] });
        }
    })

    useEffect(() => {
        if (!isLoading && data) {
            setFaqs(data?.data?.result?.rootQuestions || []);
            setFaqLoading(false);
        }
    }, [data, isLoading]);

    // Fetch initial FAQs
    async function fetchFaqs() {
        try {
            const res = await api.post("/Chat/StartChat", { companyId }, {
            });

            return res;
        } catch (err) {
            console.error(err);
        }
    }

    // signalR chat here
    async function CustomerChat() {
        try {
            setChatSpace(true);
            const res = await api.post("/Chat/RequestLiveChat", {
                companyId,
                customerName: "test",
                customerEmail: "user@example.com",
                customerPhone: "string",
                initialQuery: "string"
            });
            console.log(res.data)
            setFaqs(res.data?.result?.questions);
            setFaqLoading(false);
            setFaqDepth(0);
        } catch (err) {
            console.error(err);
        }
    }

    async function submitFaqFeedback() {
        // const res = await api.post("/Lead/Save", {
        //         title: "string",
        //         requestBy: "string",
        //         assignTo: "string",
        //         priority: 0,
        //         leadType: "string",
        //         description: "string"   
        // })
        // console.log(res)
        console.log("feedback submitted")
    }

    /** ------------------------------------ EVENT HANDLERS----------------------------------------------- ---- **/

    function handleFaqClick(faq: Faq) {
        openChat();

        const userMessage = {
            id: faq.id,
            type: 'user',
            text: faq.question,
            time: dateParser(Date.now())[1],
            isLoading: false
        };

        setMessages(prev => {
            if (isChatOpen) {
                return [...prev.slice(0, -1), userMessage];
            } else {
                return [...prev, userMessage];
            }
        });

        setInputValue('');

        if (isFaqOpen) {
            setFaqs(prevFaqs => prevFaqs.filter(f => f.id !== faq.id));
        }

        const loaderId = (Date.now() + 1).toString();
        const loadingMessage = { id: loaderId, type: 'bot', text: "", time: dateParser(Date.now())[1], isLoading: true };
        setMessages(prev => [...prev, loadingMessage]);

        faqMutation.mutate(faq.id);
    }

    function toggleWelcome() {
        if (!isWelcomeOpen) setIsFaqOpen(false)
        setIsWelcomeOpen(prev => !prev);
    }

    function openFaq() {
        setFaqLoading(true);
        setTouched(true);
        queryClient.prefetchQuery({
            queryKey: ['faqs'],
            queryFn: fetchFaqs
        });

        setIsWelcomeOpen(false);
        setIsFaqOpen(true);
        setIsChatOpen(false);
        setIsAgentOpen(false);
        // fetchFaqs();

        setFaqDepth(0);
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
        CustomerChat();
    }

    const handleFaqBackToStart = () => {
        setChatSpace(false);
        setFaqFb(false);
        setFaqLoading(true);
        setFaqDepth(0);
        setShowBotIcon(true);
        closeChat();
        openFaq();
    };

    const closeChat = () => {
        setTouched(false)
        setIsAgentOpen(false);
        setIsChatOpen(false);
        setShowBotIcon(true);
        // setMessages([{ id: "", type: 'bot', text: 'Hi! How can I help you?', time: dateParser(Date.now())[1], isLoading: false }])
        setMessages(messages => messages.filter((msg, i) => msg.type !== "back-to-start"));
    }

    // Handle user input message send
    function sendMessage() {
        if (!inputValue.trim()) return;

        const newMessage = {
            id: Date.now().toString(),
            type: 'user',
            text: inputValue,
            time: dateParser(Date.now())[1],
            isLoading: false
        };
        setMessages(prev => [...prev, newMessage]);

        // Add loading indicator for bot response
        const loaderId = (Date.now() + 1).toString();
        const loadingMessage = { id: loaderId, type: 'bot', text: "", time: dateParser(Date.now())[1], isLoading: true };
        setMessages(prev => [...prev, loadingMessage]);

        faqMutation.mutate(inputValue);

        setInputValue('');
    }

    /** ------------------------------------------ RENDER ----------------------------------------------- **/
    return (
        <div id="chat-root">
            {/* Floating Chat Icon */}
            {showBotIcon && (
                <div className="chat-icon" role="button" onClick={toggleWelcome} ref={iconRef}>
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
                            {(isLoadingError || isRefetchError) ? <li className="sorry">It's not you, it's us</li> : faqLoading ? (
                                <FaqSkeleton />
                            ) : (
                                faqs.map((faq, index) => (
                                    <li key={index} onClick={() => handleFaqClick(faq)}>
                                        {faq.question}
                                    </li>
                                ))
                            )}

                            {/* <div id="talk-btn" onClick={openAgent}>Can I talk to someone?</div> */}
                            <div id="talk-btn" onClick={openChat}>Can I talk to someone?</div>
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
                                            {msg.options && msg.options.map((option: Faq, idx: number) => (
                                                <button key={idx} className="faq-inline-btn" onClick={() => handleFaqClick(option)}>
                                                    {option.question}
                                                </button>
                                            ))}
                                        </div>
                                    ) : msg.type === 'back-to-start' ? (
                                        <>
                                            {faqFb && <FaqFeedbackModal onSubmit={submitFaqFeedback} onClose={handleFaqBackToStart} />}
                                            <div className="faq-header">
                                                <button className="back-to-start" onClick={CustomerChat} aria-label="Back to start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio-icon lucide-radio"><path d="M16.247 7.761a6 6 0 0 1 0 8.478" /><path d="M19.075 4.933a10 10 0 0 1 0 14.134" /><path d="M4.925 19.067a10 10 0 0 1 0-14.134" /><path d="M7.753 16.239a6 6 0 0 1 0-8.478" /><circle cx="12" cy="12" r="2" /></svg>
                                                    <span>Live chat</span>
                                                </button>
                                                <button className="back-to-start" onClick={() => setFaqFb(true)} aria-label="Back to start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
                                                    <span>Back to Start</span>
                                                </button>
                                            </div>
                                        </>

                                    ) : (
                                        <>
                                            <p className={msg.type === 'bot' ? (msg.isLoading ? "loader-wrapper" : 'bot-msg') : 'user-msg'}>
                                                {msg.type === 'bot' && msg.isLoading ? (
                                                    <span className="loader"></span>
                                                ) : msg.type === 'bot' ? (
                                                    msg.text.split(" ").map((w, i) => {
                                                        if (w.startsWith("https://") && (w.endsWith(".com") || w.endsWith(".in"))) {
                                                            return <a key={i} href={w} target="_blank">{w}</a>;
                                                        } else {
                                                            return <span key={i}>{w} </span>;
                                                        }
                                                    })
                                                ) : (
                                                    msg.text
                                                )}
                                            </p>
                                            {!msg.isLoading && <div className={msg.type === 'bot' ? 'bot-time' : 'user-time'}>{msg.time}</div>}
                                        </>
                                    )}
                                </div>
                            ))}

                        </div>

                        {/* Input */}
                        {chatSpace && <div className="input">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={inputValue}
                                onInput={e => setInputValue(e.currentTarget.value)}
                                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                            />
                            <div className="send" onClick={sendMessage}>
                                {send_icon}
                            </div>
                        </div>}
                    </div>
                </div>
            )}

            {/* Agent Section */}
            {/* {isAgentOpen && (
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
                        <div className="messages" ref={scrollRef}>
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
                            <div className="send" onClick={sendMessage}>{send_icon}</div>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    );
}