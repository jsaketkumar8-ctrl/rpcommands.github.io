# ⚡ QUICK START GUIDE

## 🚀 Get Started in 30 Seconds

### Step 1: View the Website
Open **`index.html`** in your browser (Firefox, Chrome, Safari, Edge, etc.)

### Step 2: Login to Admin Mode (Optional)
When the login modal appears:
- **Username:** `Saket`
- **Password:** `Saket123`
- Click **"Login"** for admin access
- Or click **"Skip"** to browse as a guest

### Step 3: Navigate
Click any of the 5 department buttons:
- 🚗 **SAHP** - San Andreas Highway Patrol
- 👮 **LSPD** - Los Santos Police Department  
- 🏛️ **GOV** - Government
- 🕵️ **FIB** - Federal Investigation Bureau
- 🪖 **NG** - National Guard

### Step 4: Interact
- **Guest Users:** View cards, copy text, search
- **Admin Users:** Add, edit, delete cards

---

## 📋 What's Available

| Feature | Guest | Admin |
|---------|-------|-------|
| View Cards | ✅ | ✅ |
| Search Cards | ✅ | ✅ |
| Copy Text | ✅ | ✅ |
| Add Cards | ❌ | ✅ |
| Edit Cards | ❌ | ✅ |
| Delete Cards | ❌ | ✅ |
| Toggle Theme | ✅ | ✅ |

---

## 🔐 Admin Features

### Add New Card
```
1. Login with Saket / Saket123
2. At bottom of page: Click "➕ Add New Text"
3. Enter: Title, Category, Content
4. Card appears immediately
```

### Edit Existing Card
```
1. Each card shows "✏️ Edit" button
2. Click Edit
3. Update Title, Category, or Content
4. Changes saved automatically
```

### Delete Card
```
1. Click "🗑️ Delete" on any card
2. Confirm deletion
3. Card removed immediately
```

---

## 🌐 Deploy to GitHub Pages

Ready to go live? It's simple:

```bash
# 1. Push files to GitHub repository
git add .
git commit -m "Add RP Portal website"
git push origin main

# 2. Go to your repository on GitHub
# Settings > Pages > Source: main branch

# 3. Visit: https://yourusername.github.io/rpcommands.github.io
```

**That's it!** No build process needed. Everything is static HTML/CSS/JS.

---

## 🎨 Customize It

### Add Your Own Content
Edit `script.js` → Find `defaultData` → Add your text cards

### Change Colors
Edit `style.css` → Find `:root` section → Change color hex codes

### Change Admin Password
Edit `script.js` → Find `handleLogin()` → Change credentials

---

## 💡 Pro Tips

1. **Keyboard Shortcuts:**
   - Press `Enter` in password field to login
   - Use `Ctrl+K` or `Cmd+K` to search (if browser supports)

2. **Theme Toggle:**
   - Click ☀️ icon in navbar to switch dark/light mode
   - Preference saved automatically

3. **Data Persistence:**
   - All data saved in browser's localStorage
   - Survives page reload and browser restart
   - Clears only if you clear browser data

4. **Search Tips:**
   - Search by title: "protocol"
   - Search by content: "request license"
   - Search by category: "procedure"

---

## 🐛 Troubleshooting

### Cards Not Showing?
- Check if JavaScript is enabled
- Try refreshing the page
- Clear browser cache and reload

### Admin Mode Not Working?
- Make sure you entered: `Saket` and `Saket123`
- Check for typos in password
- Try a different browser

### Data Lost?
- Check browser localStorage settings
- Confirm not cleared in privacy settings
- Try importing from backup

### Styling Looks Off?
- Confirm CSS file loaded (check in browser DevTools)
- Try different browser
- Check file paths are correct

---

## 📞 Need Help?

### Check These Files:
- **`README.md`** - Full documentation
- **`GUIDE.md`** - Feature overview
- **`script.js`** - Code comments explain functions
- **`style.css`** - CSS comments explain styles

### Common Questions:

**Q: Can I add more departments?**
A: Yes! Copy an HTML file, update section name, add to defaultData in script.js

**Q: Is this secure for production?**
A: No - it's a frontend demo. For real security, use backend authentication.

**Q: Can I use my own colors?**
A: Yes! Edit the CSS variables in style.css `:root` section

**Q: Will my data sync across devices?**
A: No - localStorage only saves in one browser. Use backend if needed.

---

## ✅ File Checklist

Make sure you have all files:
- [x] `index.html` - Homepage
- [x] `sahp.html` - SAHP section
- [x] `lspd.html` - LSPD section
- [x] `gov.html` - Government section
- [x] `fib.html` - FIB section
- [x] `ng.html` - National Guard section
- [x] `style.css` - All styling
- [x] `script.js` - All functionality
- [x] `README.md` - Full documentation
- [x] `GUIDE.md` - Feature guide
- [x] `QUICKSTART.md` - This file

---

## 🎉 You're All Set!

The website is **100% ready to use**. No setup, installation, or build process needed.

Just open `index.html` and enjoy! 🚀

---

**Made by Saket** | © 2026 RP Portal