# 🎬 RP Portal - Roleplay Management System

A modern, professional multi-page website for managing Roleplay (RP) commands and protocols. Built with HTML, CSS, and JavaScript—fully static and ready for GitHub Pages hosting.

## ✨ Features

### 🏠 Homepage
- **Cinematic Hero Section** with animated gradient text
- **Glassmorphism UI** - Modern glass-effect cards with blur backgrounds
- **5 Department Buttons** - Quick navigation to SAHP, LSPD, GOV, FIB, and NG sections
- **Smooth Animations** - Fade-in and scale effects on load and hover
- **Responsive Design** - Mobile-friendly with adaptive layouts

### 📄 Section Pages (SAHP, LSPD, GOV, FIB, NG)
- **Text Cards Management** - Display multiple command/protocol cards per section
- **Search Functionality** - Real-time filtering by title, content, or category
- **Copy-to-Clipboard** - One-click text copying with toast notifications
- **Category Tags** - Organize content with categories
- **Responsive Grid** - Auto-adjusting card layouts

### 🔐 Admin Mode
- **Frontend Login System** - Username: `Saket` | Password: `Saket123`
- **Add New Cards** - Create new text cards with title, content, and category
- **Edit Cards** - Modify existing card content
- **Delete Cards** - Remove unwanted cards
- **Admin Indicator** - Visual display showing admin mode status
- **localStorage Persistence** - All data saved locally in browser

### 🎨 Design & UX
- **Dark Theme** with neon blue/purple highlights (Discord-inspired)
- **Glassmorphism Cards** - Modern translucent design elements
- **Gaming Dashboard Style** - Inspired by gaming interfaces
- **Smooth Animations** - CSS transitions and keyframe animations
- **Dark/Light Mode Toggle** - Theme switching capability
- **Modern Fonts** - Google Fonts (Poppins) integration

### 📱 Responsive Features
- **Mobile Optimization** - Fully responsive on all screen sizes
- **Adaptive Navbar** - Collapsible menu for smaller screens
- **Flexible Grid** - Cards adjust layout based on viewport
- **Touch-Friendly** - Large buttons suitable for mobile interaction

### 🔍 Extra Features
- **Search Bar** - Filter cards on each section page
- **Category Tags** - Organize and identify card types
- **Scroll Animations** - Elements animate on scroll into view
- **Toast Notifications** - User feedback on copy/add/delete actions
- **Footer** - Made by Saket with copyright info

## 📁 File Structure

```
rpcommands.github.io/
├── index.html          # Homepage with department selection
├── sahp.html           # San Andreas Highway Patrol section
├── lspd.html           # Los Santos Police Department section
├── gov.html            # Government section
├── fib.html            # Federal Investigation Bureau section
├── ng.html             # National Guard section
├── style.css           # Main stylesheet (all pages)
├── script.js           # Shared JavaScript functionality
└── README.md           # This file
```

## 🚀 Quick Start

### Local Development
1. Clone or download the repository
2. Open `index.html` in your browser
3. Navigate through departments
4. Try admin login credentials: `Saket` / `Saket123`

### GitHub Pages Deployment
1. Push the files to your GitHub Pages repository
2. Visit `https://yourusername.github.io/rpcommands.github.io`
3. The site will automatically serve as a static website

## 🔑 Admin Mode Guide

### Logging In
1. Load any page in the website
2. A login modal will appear automatically
3. Enter credentials:
   - **Username:** `Saket`
   - **Password:** `Saket123`
4. Click "Login" to enable admin mode
5. Or click "Skip" to continue as a guest

### Admin Capabilities
- **Add New Text Cards**: Click the "➕ Add New Text" button at the bottom of cards
  - Enter card title, category, and content
  - Data automatically saved to localStorage

- **Edit Cards**: Click the "✏️ Edit" button on any card
  - Modify title, category, and content
  - Changes instantly saved

- **Delete Cards**: Click the "🗑️ Delete" button to remove a card
  - Confirmation required before deletion

### Guest Mode (Without Login)
- View all text cards
- Copy text to clipboard
- Search and filter cards
- No editing/deletion capabilities

## 💾 Data Storage

- **localStorage Implementation**: All data stored in browser's localStorage
- **Separate Keys**: Each section (sahp, lspd, gov, fib, ng) has its own storage key
- **Default Data**: Sample data pre-loaded on first visit
- **Persistent**: Data persists across browser sessions until cleared

### Clearing Data
```javascript
// To clear all data (browser console)
localStorage.clear();

// To clear specific section
localStorage.removeItem('sahp');
localStorage.removeItem('lspd');
// etc...
```

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
  --accent-blue: #00d4ff;      /* Main neon blue */
  --accent-purple: #b700ff;    /* Neon purple */
  --accent-pink: #ff006e;      /* Neon pink */
  --primary-color: #1a1a2e;    /* Dark background */
  /* ... more variables ... */
}
```

### Changing Admin Credentials
Edit in `script.js` (function `handleLogin()`):
```javascript
if (username === 'YourUsername' && password === 'YourPassword') {
  // Admin access granted
}
```

### Modifying Default Data
Edit the `defaultData` object in `script.js` to include your content:
```javascript
const defaultData = {
  sahp: [
    {
      id: 1,
      title: 'Your Title',
      content: 'Your content here',
      category: 'Your Category'
    }
  ],
  // ... more sections ...
};
```

## 🔧 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling (flexbox, grid, animations)
- **JavaScript (ES6+)** - Dynamic functionality
- **localStorage API** - Client-side data persistence
- **Google Fonts** - Modern typography (Poppins)

## 📋 Features Breakdown

| Feature | Desktop | Mobile | Admin Only |
|---------|---------|--------|-----------|
| View Cards | ✅ | ✅ | ❌ |
| Search/Filter | ✅ | ✅ | ❌ |
| Copy to Clipboard | ✅ | ✅ | ❌ |
| Theme Toggle | ✅ | ✅ | ❌ |
| Add Cards | ✅ | ✅ | ✅ |
| Edit Cards | ✅ | ✅ | ✅ |
| Delete Cards | ✅ | ✅ | ✅ |

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## ⚠️ Important Notes

- **Frontend Only**: This is a frontend-only application. No backend or server code.
- **Demo Login**: The login system is a frontend demo. Not suitable for production security.
- **Local Storage**: Data is stored in browser localStorage—clearing browser data will delete all information.
- **GitHub Pages Compatible**: Fully static content—no build process required.

## 🎯 Core Functions Reference

### For Developers

**Load Cards from Section:**
```javascript
const cards = loadCards('sahp'); // Returns array
```

**Save Cards to Section:**
```javascript
saveCards('sahp', cardsArray);
```

**Copy Text to Clipboard:**
```javascript
copyToClipboard('text to copy');
```

**Show Toast Notification:**
```javascript
showToast('Your message', 'success'); // or 'error'
```

**Get Current Page:**
```javascript
const page = getCurrentPage(); // Returns 'sahp', 'lspd', etc.
```

## 🎨 Design Inspiration

- **Discord UI** - Modern chat interface styling
- **Gaming Dashboards** - Interactive game UI elements
- **Glassmorphism** - Modern glass-effect design trend
- **Neon Aesthetic** - Cyberpunk-inspired color palette

## 📝 License

This project is created and maintained by Saket. Feel free to use and modify for personal or educational purposes.

## 🤝 Contributing

To suggest improvements or report issues:
1. Note the issue or suggestion
2. Contact the project maintainer
3. Improvements welcome for layout, features, or documentation

## 📞 Support

For questions or issues:
- Check the customization section above
- Review the code comments in `script.js` and `style.css`
- Inspect your browser's localStorage for debugging

---

**Made by Saket** | © 2026 RP Portal. All rights reserved.

*A modern, cinematic RP management platform built with pure frontend technology.*