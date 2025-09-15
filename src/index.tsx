import { h, render } from 'preact';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ChatWidget from './components/chatwidget.js';

const queryClient = new QueryClient();

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Questrial&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  @import "./src/components/widget.css";
`;

function injectStyles(shadowRoot) {
  const style = document.createElement("style");
  style.textContent = css;
  shadowRoot.appendChild(style);
}

const widgetContainer = document.createElement("div");
widgetContainer.id = "chat-widget-container";

// Create Shadow DOM with open mode for better compatibility
const shadowRoot = widgetContainer.attachShadow({ mode: "open" });

// Inject styles into Shadow DOM
injectStyles(shadowRoot);

const widgetRoot = document.createElement("div");
widgetRoot.id = "chat-widget-root";
shadowRoot.appendChild(widgetRoot);

// Append the container to the document body
document.body.appendChild(widgetContainer);

// Render the component into the Shadow DOM
// Use the widgetRoot as the container for Preact
render(h(QueryClientProvider, { client: queryClient }, h(ChatWidget, null)), widgetRoot);