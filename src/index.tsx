import { h, render } from 'preact';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ChatWidget from './components/chatwidget.js';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Questrial&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  @import "./src/components/widget.css";
`;

function injectStyles(shadowRoot: ShadowRoot) {
  const style = document.createElement("style");
  style.textContent = css;
  shadowRoot.appendChild(style);
}

const widgetContainer = document.createElement("div");
widgetContainer.id = "chat-widget-container";

// Create Shadow DOM
const shadowRoot = widgetContainer.attachShadow({ mode: "open" });

// Inject styles into Shadow DOM
injectStyles(shadowRoot);

const widgetRoot = document.createElement("div");
widgetRoot.id = "chat-widget-root";
shadowRoot.appendChild(widgetRoot);

// Append the container to the document body
document.body.appendChild(widgetContainer);

//  Create QueryClient instance
const queryClient = new QueryClient();

//  Wrap ChatWidget with QueryClientProvider
render(
  h(QueryClientProvider, { client: queryClient }, h(ChatWidget, null)),
  widgetRoot
);
