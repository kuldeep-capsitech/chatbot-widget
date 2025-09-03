# 🧩 Preact + Vite Chatbot Widget

## 📚 Table of Contents

1. [🌐 Shadow DOM: Encapsulation by Design](#-shadow-dom-encapsulation-by-design)  
2. [🚀 Getting Started with Preact + Vite](#-getting-started-with-preact--vite)  
   - [🛠 Recommended IDE Setup](#-recommended-ide-setup)  
3. [📦 Installation & Development](#-installation--development)  
4. [🏗 Building for Production](#-building-for-production)  
5. [🌍 Embedding the Widget via CDN](#-embedding-the-widget-via-cdn)  

---

## 🌐 Shadow DOM: Encapsulation by Design

This widget is built using **Shadow DOM**, a browser-native technology that encapsulates a component’s structure, style, and behavior. By rendering the chat widget inside a shadow root, we ensure:

- **Style Isolation**: CSS defined inside the widget won’t leak out, and external styles won’t affect the widget.  
- **DOM Encapsulation**: The widget’s internal markup is hidden from the main document, preventing accidental interference.  
- **Reusable Custom Element**: The widget can be embedded anywhere using a simple `<script>` tag, behaving like a native HTML element.  

Perfect for embedding in third-party sites or apps without worrying about style conflicts or JavaScript collisions.

---

## 🚀 Getting Started with Preact + Vite

This template helps you kick off a lightweight Preact project powered by Vite, optimized for fast development and smooth builds.

### 🛠 Recommended IDE Setup

- [Visual Studio Code](https://code.visualstudio.com/)  
- [Preact Snippets for VS Code](https://marketplace.visualstudio.com/items?itemName=blauwmaan.preact-snippets)

---

## 📦 Installation & Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

This launches the Vite dev server with hot module replacement (HMR). Visit `http://localhost:5173` to preview your widget.

---

## 🏗 Building for Production

```bash
pnpm build
```

This compiles your Preact component into a standalone JavaScript file, ready to be embedded via CDN or hosted on your own server.

The output will be in the `dist/` folder. The widget is built as `chat-widget.iife.js`.

---

## 🌍 Embedding the Widget via CDN

Once built, you can host the compiled JS file on a CDN (like jsDelivr, GitHub Pages, or Cloudflare) and embed it like this:

```html
<!-- Include the widget script -->
<script src="https://cdn.jsdelivr.net/gh/your-username/preact-chatbot@main/dist/chat-widget.iife.js" defer></script>
