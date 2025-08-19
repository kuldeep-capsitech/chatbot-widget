# Chatbot Widget - CDN Hosting Guide

This is a simple chatbot widget that can be easily embedded into any website using CDN.

## How to Host on CDN

### Option 1: GitHub Pages (Recommended - Free)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/chatbot-widget.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Create an index.html file**
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Chatbot Widget</title>
   </head>
   <body>
       <script src="./dist/index.umd.js"></script>
   </body>
   </html>
   ```

4. **Your CDN URL will be:**
   ```
   https://yourusername.github.io/chatbot-widget/dist/index.umd.js
   ```

### Option 2: jsDelivr CDN (Free)

1. **Push to GitHub** (same as above)
2. **Use jsDelivr URL:**
   ```
   https://cdn.jsdelivr.net/gh/yourusername/chatbot-widget@main/dist/index.umd.js
   ```

### Option 3: UNPKG (Free)

1. **Publish to npm:**
   ```bash
   npm login
   npm publish
   ```
2. **Use UNPKG URL:**
   ```
   https://unpkg.com/your-package-name@latest/dist/index.umd.js
   ```

### Option 4: Netlify (Free)

1. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your project folder
   - Or connect your GitHub repository

2. **Your CDN URL will be:**
   ```
   https://your-site-name.netlify.app/dist/index.umd.js
   ```

## How to Use the Widget

### Method 1: Direct Script Tag
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Welcome to my website</h1>
    
    <!-- Include the chatbot widget -->
    <script src="https://your-cdn-url.com/index.umd.js"></script>
</body>
</html>
```

### Method 2: Async Loading
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Welcome to my website</h1>
    
    <!-- Load chatbot widget asynchronously -->
    <script>
        (function() {
            var script = document.createElement('script');
            script.src = 'https://your-cdn-url.com/index.umd.js';
            script.async = true;
            document.head.appendChild(script);
        })();
    </script>
</body>
</html>
```

### Method 3: On-Demand Loading
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Welcome to my website</h1>
    
    <button onclick="loadChatbot()">Load Chatbot</button>
    
    <script>
        function loadChatbot() {
            if (!window.chatbotLoaded) {
                var script = document.createElement('script');
                script.src = 'https://your-cdn-url.com/index.umd.js';
                script.onload = function() {
                    window.chatbotLoaded = true;
                    console.log('Chatbot loaded successfully!');
                };
                document.head.appendChild(script);
            }
        }
    </script>
</body>
</html>
```

## Customization

The widget will automatically initialize when the script loads. You can customize it by modifying the `src/App.tsx` file and rebuilding.

## File Structure

```
dist/
├── index.umd.js      # Main widget file (use this for CDN)
├── index.modern.js   # Modern ES6 version
├── index.module.js   # ES module version
└── index.css         # Styles (included in JS)
```

## Performance Tips

1. **Use UMD version** (`index.umd.js`) for maximum compatibility
2. **Enable gzip compression** on your CDN
3. **Set proper cache headers** (1 year for static assets)
4. **Use HTTPS** for security

## Troubleshooting

- **Widget not appearing?** Check browser console for errors
- **Styling issues?** Make sure CSS is loading properly
- **Performance issues?** Consider using a CDN with edge locations
