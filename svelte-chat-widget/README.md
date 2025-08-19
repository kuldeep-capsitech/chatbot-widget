
# 🧩 Svelte + Vite Chatbot Widget

## 🌐 Shadow DOM: Encapsulation by Design

This widget is built using **Shadow DOM**, a browser-native technology that encapsulates a component’s structure, style, and behavior. By rendering the chat widget inside a shadow root, we ensure:

- **Style Isolation**: CSS defined inside the widget won’t leak out, and external styles won’t affect the widget.
- **DOM Encapsulation**: The widget’s internal markup is hidden from the main document, preventing accidental interference.
- **Reusable Custom Element**: The widget can be embedded anywhere using a simple `<chat-widget>` tag, behaving like a native HTML element.

This makes it ideal for embedding in third-party sites or apps without worrying about style conflicts or JavaScript collisions.

---

## 🚀 Getting Started with Svelte + Vite

This template helps you kick off a Svelte project powered by Vite, optimized for fast development and smooth builds.

### 🛠 Recommended IDE Setup

- [Visual Studio Code](https://code.visualstudio.com/)
- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

---

## 📦 Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

This launches the Vite dev server with hot module replacement (HMR). Visit `http://localhost:5173` to preview your widget.

---

## 🏗 Building for Production

```bash
npm run build
```

This compiles your Svelte component into a standalone JavaScript file, ready to be embedded via CDN or hosted on your own server.

The output will be in the `dist/` folder. The widget is built as "chat-widget.iife.js".

---

## 🌍 Embedding the Widget via CDN

Once built, you can host the compiled JS file on a CDN (like jsDelivr, GitHub Pages, or Cloudflare) and embed it like this:

```html
<!-- Include the widget script -->
<script src="https://cdn.jsdelivr.net/gh/biswarup-capsi/sv-chatbot-widget@main/dist/chat-widget.iife.js"></script>

<!-- Use the custom element -->
<chat-widget></chat-widget>
```

Make sure your Svelte component is compiled with `customElement: true` in `svelte.config.js`:

```js
// svelte.config.js
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default {
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true
      }
    })
  ]
};
```

This tells Svelte to wrap your component as a native Web Component using Shadow DOM.

---

## 🧠 Technical Considerations

### Why use this over SvelteKit?

- SvelteKit includes routing and server-side rendering, which may be overkill for simple widgets.
- This template is minimal and Vite-native, ideal for embedding components or building micro frontends.

### Why `global.d.ts` instead of `compilerOptions.types`?

Using triple-slash references allows TypeScript to infer types from the whole workspace while still including `svelte` and `vite/client`.

### Why include `.vscode/extensions.json`?

This file prompts VS Code to suggest installing the Svelte extension, improving your dev experience with syntax highlighting and intellisense.

### Why enable `checkJs`?

It catches accidental type mismatches in JavaScript files, helping you write safer code without converting everything to TypeScript.

---

## 🔁 HMR and State Preservation

Hot Module Replacement (HMR) is enabled by default, but local component state is **not preserved** across reloads. For persistent state, use an external store:

```js
// store.js
import { writable } from 'svelte/store';
export default writable(0);
```

---
