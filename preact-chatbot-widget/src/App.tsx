import { h } from "preact";
import { useState } from "preact/hooks";

// Inline SVG as data URL to avoid microbundle issues
const CHAT_ICON_SVG = `data:image/svg+xml;base64,${btoa(`<svg width="75" height="68" viewBox="0 0 75 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_8637_4736)">
<ellipse cx="37.5002" cy="30" rx="25.1296" ry="21.6667" fill="white"/>
<path d="M37.5002 4C21.2078 4 8 15.6409 8 30.0002C8 37.3989 11.5062 44.0755 17.1343 48.81C17.0623 51.0675 16.2932 53.302 14.9482 55.0939C17.5558 54.9875 20.1101 53.9229 22.0741 52.1664C26.5625 54.598 31.8457 56.0004 37.5002 56.0004C53.7926 56.0004 67.0004 44.3595 67.0004 30.0002C67.0004 15.6409 53.7926 4 37.5002 4ZM55.8352 42.599C54.748 43.8262 53.1989 44.516 51.5813 44.516H23.4191C21.8015 44.516 20.2524 43.8262 19.1652 42.599C16.0867 39.1239 14.2522 34.7507 14.2522 29.9998C14.2522 25.249 16.0863 20.8761 19.1648 17.401C22.5117 13.622 27.3739 10.5 37.5 10.5C45.948 10.5 52.7599 13.9097 55.8733 17.4436C58.9292 20.9115 60.7482 25.2685 60.7482 29.9994C60.7482 34.7303 58.9137 39.1239 55.8352 42.599Z" fill="url(#paint0_linear_8637_4736)"/>
<path d="M31.2311 29.1936C30.3741 30.545 29.1376 29.1936 26.5542 29.1936C23.9707 29.1936 22.7346 30.545 21.8776 29.1936C21.0482 27.8852 23.3365 24.6578 26.5542 24.6578C29.7718 24.6578 32.0602 27.8856 31.2311 29.1936Z" fill="#46359D"/>
<path d="M53.1223 29.1936C52.2653 30.545 51.0287 29.1936 48.4453 29.1936C45.8618 29.1936 44.6257 30.545 43.7687 29.1936C42.9393 27.8852 45.2276 24.6578 48.4453 24.6578C51.6629 24.6578 53.9513 27.8856 53.1223 29.1936Z" fill="#46359D"/>
<path d="M37.4996 35.3421C35.6966 35.3421 34.5071 33.8776 34.4573 33.8155C34.1879 33.4777 34.2365 32.9798 34.5662 32.7038C34.8959 32.4278 35.382 32.4776 35.6515 32.8153C35.6565 32.8213 36.4381 33.7621 37.4996 33.7621C38.5612 33.7621 39.3427 32.8213 39.3505 32.8118C39.62 32.474 40.1045 32.4258 40.4342 32.7018C40.7639 32.9779 40.8114 33.4773 40.5415 33.8151C40.4918 33.8776 39.3023 35.3417 37.4992 35.3417L37.4996 35.3421Z" fill="#46359D"/>
</g>
<defs>
<filter id="filter0_d_8637_4736" x="0" y="0" width="75.0005" height="68.0004" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8637_4736"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8637_4736" result="shape"/>
</filter>
<linearGradient id="paint0_linear_8637_4736" x1="67.0004" y1="30.0002" x2="8" y2="30.0002" gradientUnits="userSpaceOnUse">
<stop stop-color="#99A1E3"/>
<stop offset="0.129808" stop-color="#858EDC"/>
<stop offset="0.389423" stop-color="#635EBA"/>
<stop offset="1" stop-color="#43319A"/>
</linearGradient>
</defs>
</svg>`)}`;

// For the send icon, we'll use a simple SVG as a fallback
const SEND_ICON_SVG = `data:image/svg+xml;base64,${btoa(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
</svg>`)}`;

// Define types for the steps structure
interface StepOption {
  text: string;
  nextId: string;
}

interface Step {
  question: string;
  options?: StepOption[];
  end?: boolean;
}

interface Steps {
  [key: string]: Step;
}

// Core steps without repetitive back/talk
const baseSteps: Steps = {
  start: {
    question: "Hi, How Can I Help You?",
    options: [
      { text: "What courses do you offer?", nextId: "courses" },
      { text: "How do I apply?", nextId: "apply" },
      { text: "Is financial aid available?", nextId: "aid" },
      { text: "Tell me about your company", nextId: "about" },
      { text: "Where are you located?", nextId: "location" },
      { text: "What are your working hours?", nextId: "hours" },
      { text: "Do you offer internships?", nextId: "internships" },
    ],
  },

  courses: {
    question: "We offer Web Development, Data Science, AI & ML, Cybersecurity, and UI/UX Design courses.",
    options: [
      { text: "Web Development", nextId: "webdev" },
      { text: "Data Science", nextId: "datasci" },
      { text: "AI & ML", nextId: "aiml" },
      { text: "Cybersecurity", nextId: "cyber" },
      { text: "UI/UX Design", nextId: "uiux" },
    ],
  },

  webdev: { question: "HTML, CSS, JavaScript, React, backend APIs." },
  datasci: { question: "Python, Pandas, NumPy, ML, visualization." },
  aiml: { question: "Supervised/unsupervised learning, deep learning, deployment." },
  cyber: { question: "Network security, ethical hacking, risk management." },
  uiux: { question: "Research, wireframing, prototyping, Figma/Adobe XD." },

  apply: {
    question: "You can apply online via our 'Apply Now' page. Would you like the link?",
    options: [{ text: "Yes, please", nextId: "applyLink" }],
  },
  applyLink: { question: "Here's the link: https://www.capsitech.com/career/" },

  aid: {
    question: "We offer scholarships and installment plans. Want more details?",
    options: [{ text: "Yes", nextId: "aidDetails" }],
  },
  aidDetails: { question: "Scholarships are merit-based; installment plans on request." },

  talk: { question: "Sure! Type your message below and our team will reply.", end: true },

  about: {
    question: "We are Capsitech, a tech company offering training & digital solutions.",
    options: [
      { text: "Our Mission", nextId: "mission" },
      { text: "Our Vision", nextId: "vision" },
    ],
  },
  mission: { question: "To empower learners with industry-relevant skills." },
  vision: { question: "To be a global leader in affordable, impactful education." },

  location: {
    question: "We are based in Surat, Gujarat, India.",
    options: [{ text: "Show me the map", nextId: "map" }],
  },
  map: { question: "Google Maps: https://goo.gl/maps/example" },

  hours: { question: "Monday to Friday, 9:00 AM to 6:00 PM IST." },

  internships: {
    question: "Yes, we offer internships for top students after course completion.",
    options: [{ text: "How to apply for internship?", nextId: "internApply" }],
  },
  internApply: { question: "Email your resume to hr@capsitech.com." },
};

// Utility to add back + talk options to each step
function addCommonOptions(steps: Steps): Steps {
  const enhancedSteps: Steps = {};

  Object.entries(steps).forEach(([id, step]) => {
    // Clone original options or make an empty array
    const options = [...(step.options || [])];

    // Add talk to someone option if not start
    if (id !== "talk") {
      options.push({ text: "💬 Talk to someone", nextId: "talk" });
    }

    // Add back to previous (to be handled dynamically in your logic)
    if (id !== "start") {
      options.push({ text: "⬅ Back to Previous", nextId: "__prev__" });
      options.push({ text: "⬅ Back to Main Menu", nextId: "start" });
    }

    enhancedSteps[id] = { ...step, options };
  });

  return enhancedSteps;
}

const steps: Steps = addCommonOptions(baseSteps);


const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  const [messages, setMessages] = useState([
    { type: "model", text: steps["start"].question },
  ]);
  const [currentStep, setCurrentStep] = useState("start");
  const [usermsg, setUsermsg] = useState("");
  const [inputEnabled, setInputEnabled] = useState(false);

  const handleChatToggle = () => {
    setIsChatOpen((prev) => !prev);
    setIsFAQOpen(false);
  };

  const handleFAQClick = () => {
    setIsChatOpen(false);
    setIsFAQOpen((prev) => !prev);
  };

  const handleOptionClick = (option: StepOption) => {
    const next = steps[option.nextId];
    if (!next) return;

    setMessages((prev) => [
      ...prev,
      { type: "user", text: option.text },
      { type: "model", text: next.question },
    ]);

    setCurrentStep(option.nextId);
    setInputEnabled(!!next.end);
  };

  const handleSend = () => {
    if (!usermsg.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: "user", text: usermsg },
      { type: "model", text: "Thanks! We'll get back to you soon." },
    ]);
    setUsermsg("");
  };



  return (
    <div className={`welcome-box-container ${isChatOpen ? "chat-open" : ""}`}>
      <div className="chat-icon" onClick={handleChatToggle}>
        <img src={CHAT_ICON_SVG} alt="Chat Icon" className="chat-icon-image" />
      </div>

      {isChatOpen && (
        <div className="welcome-box">
          <div className="welcome-content">
            <h3>Welcome to our website!</h3>
            <p>
              Nice to meet you! If you have any questions about our services,
              feel free to ask us below.
            </p>
          </div>

          <div className="welcome-buttons">
            <button
              className={`faq-btn ${isFAQOpen ? "active" : ""}`}
              onClick={handleFAQClick}
            >
              FAQ
            </button>
            <button
              className="talk-btn"
              onClick={() => {
                setIsFAQOpen(true); // Open FAQ/chat window
                setCurrentStep("talk"); // Move step to talk mode
                setMessages((prev) => [
                  ...prev,
                  { type: "model", text: steps["talk"].question },
                ]);
                setInputEnabled(true); // Force input field to show
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}

      {isFAQOpen && (
        <section className="chat-window">
          <div className="close">
            <h2>ChatFlow</h2>
            <p>
              A live chat interface that allows for seamless, natural
              communication and connection.
            </p>
          </div>

          <div className="chat">
            {messages.map((msg, i) => (
              <div key={i} className={msg.type}>
                <p>{msg.text}</p>
              </div>
            ))}


            {!inputEnabled && steps[currentStep]?.options && (
              <div className="suggested-inputs">
                {steps[currentStep].options!.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(opt)}
                    className="suggestion-btn"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            )}

          </div>

          {inputEnabled && (
            <div className="input-area">
              <input
                placeholder="Ask me anything..."
                value={usermsg}
                onChange={(e) => setUsermsg((e.target as HTMLInputElement).value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button onClick={handleSend}>
                <img src={SEND_ICON_SVG} alt="send icon" />
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default App; 