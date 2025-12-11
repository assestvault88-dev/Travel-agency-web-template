# Template Error Log & Troubleshooting Guide

This document outlines common errors you might encounter while installing, running, or modifying the Wanderlust Travel Agency Template, along with their solutions.

## 1. Setup & Installation Errors

### 🔴 Error: Images are broken or not loading
**Symptoms:** You see the "broken image" icon instead of pictures.
**Cause:** 
- The `image/` folder is missing or has been renamed.
- You moved the HTML files out of the root directory without moving the `image/` folder.
- Case sensitivity: `Image/` is different from `image/` on some servers.
**Solution:**
- Ensure the `image/` folder is in the exact same directory as your `.html` files.
- Verify file names match exactly (e.g., `image.png` vs `Image.png`).

### 🔴 Error: The page looks "plain" or "ugly" (CSS not loading)
**Symptoms:** No colors, weird fonts, everything is stacked vertically.
**Cause:**
- The `css/` folder is active but `style.css` cannot be found.
- You are opening the file from a nested folder.
**Solution:**
- Check that the `<link rel="stylesheet" href="css/style.css">` line in the `<head>` is correct.
- Ensure `style.css` exists inside the `css` folder.

---

## 2. Visual & Display Issues

### 🔸 Issue: Icons are showing as empty squares or weird characters
**Cause:** 
- Font Awesome CDN link is broken or blocked by a firewall/ad-blocker.
- No internet connection (since icons are loaded from the web).
**Solution:**
- Ensure you have an active internet connection.
- Check if your firewall is blocking `cdnjs.cloudflare.com`.

### 🔸 Issue: Fonts look generic (Times New Roman / Arial)
**Cause:**
- Google Fonts CDN cannot be reached.
**Solution:**
- Ensure you have an active internet connection.
- Check the `<link>` tags for `fonts.googleapis.com` in the `<head>`.

### 🔸 Issue: Layout breaks on mobile devices
**Cause:**
- The viewport meta tag might have been accidentally removed.
**Solution:**
- Ensure this line is present in your `<head>`:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

---

## 3. Functionality Limitations

### ⚠️ Warning: "Submit" button on forms refreshes the page but sends no email
**Context:** This is a **Static HTML Template**. It does *not* have a backend server or database connected.
**Solution:**
- You must integrate a backend service (like PHP, Node.js, Python) or use a form handling service like **Formspree** or **Netlify Forms** to actually process submissions.
- The current implementation is for **Design/UI demonstration only**.

### ⚠️ Warning: Filters on Destinations Page don't filter existing items
**Context:** The sidebar filters (Price, Region) are visual UI elements.
**Solution:**
- This template requires JavaScript logic or a database query to filter the grid items dynamically. You will need to write a JS script to hide/show `.tour-card` elements based on the filter inputs.

---

## 4. Common Modification Errors

### ❌ Error: Navbar "Book Now" button disappears or overlaps
**Cause:**
- Changing the `header` position from `absolute` to `relative` without adjusting the Hero Section padding.
**Solution:**
- If you change the header positioning, ensure you add `margin-top` or `padding-top` to the next section to prevent overlap.

### ❌ Error: Grid layout breaks when adding new tours
**Cause:**
- Styles relying on specific card heights or content lengths.
**Solution:**
- Use the `.destinations-grid` class which uses `grid-template-columns: repeat(auto-fit, ...)` to handle items automatically.
- Try to keep title and description lengths similar, or use CSS `min-height` on `.tour-card` to enforce uniformity.

---

## 5. Development Console Warnings

### ℹ️ Console Warning: "SameSite cookie..."
**Severity:** Low (Ignore for local development).
**Cause:** Third-party CDNs (like Google Fonts) setting cookies.

### ℹ️ Console Error: "File not found (404)"
**Severity:** High.
**Solution:** Check the specific file listed in the error. It usually points to a missing image or script file.
