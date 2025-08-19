import { h } from "preact";
import { render } from "preact";
import App from "./App";

// Inline CSS to ensure it's included in the bundle
const injectStyles = (shadowRoot: ShadowRoot) => {
  const css = `
    .chat-icon {
      height: 60px;
      width: 60px
      background: transparent;
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 998;
      border-radius: 50%;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background 0.3s;
    }

    .chat-icon-image {
      height: 60px;
      width: 60px;
    }

    .welcome-box-container {
      max-width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .welcome-box {
      z-index: 999;
      position: fixed;
      bottom: 100px;
      right: 24px;
      max-width: 20rem;     
      border-radius: 2.5rem 2.5rem 0 2.5rem;      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease-in-out;
    }

    .welcome-content{
      height: 124px;
      max-width: 290px;
      
      background: rgba(233, 233, 233, 1);
      backdrop-filter: blur(10px);
      margin: 1rem auto;
      padding: 0.5rem;
      padding-top: 1.25rem;
      border-radius: 2.5rem 2.5rem 0 2.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease-in-out;
    }

    .welcome-content h3 {
      margin: 0px;
      padding: 0px;
      // text-align: center;
      color: #1a1a1a;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .welcome-content p {
      width: 80%;
      // text-align: justify;
      margin: 0px;
      padding: 1rem 1rem;
      color: #4a4a4a;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      align-items: center;
    }

    .welcome-buttons {
      display: flex;
      flex-direction: flex-end;
      justify-content: space-around;
      gap: 0.5rem;

      // padding-left: 3.5rem;
      width: 290px;
    }

    .faq-btn,
    .talk-btn {
      width: 140px;
      height: 44px;
      // padding: 0.625rem 1rem;
      border: none;
      border-radius: 2rem;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 600;
      transition: all 0.2s ease-in-out;
      background: linear-gradient(
        135deg,
        rgba(67, 49, 154, 1),
        rgba(167, 190, 254, 1)
      );
      color: #ffffff;
    }

    .faq-btn:hover,
    .talk-btn:hover {
      background-color: #5a3de6;
      transform: translateY(-1px);
    }

    .chat-window {
      z-index: 999;
      position: fixed;
      bottom: 100px;
      right: 24px;
      max-width: 400px;
      height: 560px;
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
    }

    .close {
      height: 123px;
      width: 400px;

      padding: 16px 16px;
      line-height: 1.5;
      background-image: linear-gradient(
        to left,
        rgba(167, 190, 254, 1),
        rgba(110, 110, 197, 1),
        rgba(83, 71, 170, 1),
        rgba(67, 49, 154, 1)
      );

      box-sizing: border-box;
      color: white;
      border: none;
      border-radius: 20px 20px 0 0;
      cursor: pointer;
    }
      .close h2 {
      padding: 0px;
      margin: 0px;
      }

    .close p {
      font-family: sans-serif;
      font-size: 12px;
      padding: 0px;
      margin: 0px;

      padding-top: 8px;
      
     
    }

    .chat {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: #ffffff;
      --webkit-overflow-scrolling: touch;
    }

    .chat::-webkit-scrollbar {
        display: none;
    }

    .chat .user,
    .chat .model {
      display: flex;
      max-width: 80%;
    }

    .chat .user {
      justify-content: flex-end;
      align-self: flex-end;
    }

    .chat .model {
      justify-content: flex-start;
      align-self: flex-start;
    }

    .chat .user p,
    .chat .model p {
      padding: 12px 16px;
      font-size: 14px;
      line-height: 1.4;
      border-radius: 16px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      max-width: 100%;
    }

    .chat .user p {
      background-color: #d0e2ff;
      color: #000;
      border-radius: 16px 16px  0 16px;
    }

    .chat .model p {
      background-color: rgba(244, 244, 244, 1);
      color: #333;
      border-radius: 0 16px 16px 16px;
    }

    .suggested-inputs {
      padding: 12px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 8px;
      align-items: flex-end;
      animation: fadeIn 0.4s ease-in;

      // background-color: none; /* light frosted effect */
      // backdrop-filter: blur(6px); /* optional glassy effect */

    }

    .suggestion-btn {
        width: max-content;
        background-color: white;

        color: rgba(109, 108, 196, 1);

        border: 1px solid rgba(163, 185, 250, 1);
        border-radius: 20px;
        padding: 8px 14px;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .suggestion-btn:hover {
      background-color: #f0f0f0;
    }

    .input-area {
      height: 64px;
      padding: 0 12px;
      border-top: 1px solid rgba(0, 0, 0, 0.05);
      display: flex;
      align-items: center;
      background-color: #fff;
      transition: opacity 0.3s ease-in-out;
    }

    .input-area input {
      flex: 1;
      height: 40px;
      border: none;
      padding: 0 16px;
      border-radius: 20px;
      background-color: #f5f5f5;
      font-size: 14px;
      outline: none;
    }

    .input-area button {
      margin-left: 10px;
      height: 40px;
      width: 40px;
      background-color: #3d88f9;
      border: none;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background 0.2s;
    }

    .input-area button:hover {
      background-color: #2c6cd8;
    }

    .input-area button img {
      width: 18px;
      filter: brightness(0) invert(1);
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(5px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }


    #chat-widget-container {
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 9999;
    }
  `;

  // Create style element and inject CSS into Shadow DOM
  const style = document.createElement("style");
  style.textContent = css;
  shadowRoot.appendChild(style);
};

// Auto-initialization when script is loaded
const initWidget = () => {
  // Check if widget already exists to prevent multiple instances
  if (document.getElementById("chat-widget-container")) {
    return;
  }

  // Create a container element that will host the Shadow DOM
  const widgetContainer = document.createElement("div");
  widgetContainer.id = "chat-widget-container";

  // Create Shadow DOM with open mode for better compatibility
  const shadowRoot = widgetContainer.attachShadow({ mode: "open" });

  // Inject styles into Shadow DOM
  injectStyles(shadowRoot);

  // Create a div inside Shadow DOM for the widget
  const widgetRoot = document.createElement("div");
  widgetRoot.id = "chat-widget-root";
  shadowRoot.appendChild(widgetRoot);

  // Append the container to the document body
  document.body.appendChild(widgetContainer);

  // Render the component into the Shadow DOM
  // Use the widgetRoot as the container for Preact
  render(h(App, null), widgetRoot);
};

// Initialize if in browser context
if (typeof window !== "undefined" && typeof document !== "undefined") {
  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWidget);
  } else {
    initWidget();
  }
}
