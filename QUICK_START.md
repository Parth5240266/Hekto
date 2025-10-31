# Quick Start Guide

## 🚀 Running the Project

```bash
# Navigate to project
cd /var/www/html/Hekto

# Start development server with live reload (BEST OPTION!)
npm start
# Automatically opens http://localhost:3000
# SCSS auto-compiles, browser auto-refreshes on changes

# OR run separately:
npm run sass    # Watch SCSS
npm run serve   # Start server
```

## 📁 Key Files to Know

### To View the Site

- `index.html` - Open this in a browser

### To Update Content

- `src/data/products.json` - Add/edit products here
- `IMAGES_README.md` - See what images you need from Figma

### To Update Styles

- `src/scss/pages/_home.scss` - Main page styles
- `src/scss/abstracts/_variables.scss` - Colors, fonts, spacing
- `src/scss/components/_buttons.scss` - Button styles

### To Update Structure

- `index.html` - HTML structure
- `src/js/main.js` - JavaScript rendering logic

## ✏️ Adding Products from Figma

1. Export images as PNG from Figma
2. Name them exactly as shown in `IMAGES_README.md`
3. Place in `assets/images/` folder
4. Done! The page will automatically show them

## 📦 Project Structure

```
Hekto/
├── index.html              ← Open this in browser
├── dist/css/main.css       ← Compiled styles (don't edit)
├── src/
│   ├── data/
│   │   └── products.json   ← Add products here
│   ├── js/
│   │   └── main.js         ← Rendering logic
│   └── scss/
│       ├── abstracts/      ← Variables & mixins
│       ├── base/           ← Reset & base styles
│       ├── components/     ← Buttons & reusable stuff
│       ├── layout/         ← Grid & layout
│       └── pages/          ← Home page styles
└── assets/
    └── images/             ← Put Figma exports here
```

## 🔧 Common Tasks

### Start Development

```bash
npm start
```

### Or Run Separately

```bash
npm run sass    # Watch SCSS changes
npm run serve   # Start live server
npm run build:css  # One-time build
```

### Add More Products

Edit `src/data/products.json` and add new entries:

```json
{
  "id": 13,
  "name": "Product Name",
  "image": "assets/images/your-image.png",
  "price": 45.0,
  "originalPrice": 68.0,
  "colors": ["#FF8A9D"],
  "rating": 4,
  "isFeatured": true,
  "isTrending": false,
  "badge": null
}
```

## 📱 Testing

The site is responsive! Test on different screen sizes by resizing your browser window.

## 🎨 Customization

- **Colors**: Edit `src/scss/abstracts/_variables.scss`
- **Fonts**: Already using Google Fonts (Josefin Sans, Lato)
- **Layout**: Edit `src/scss/layout/_grid.scss`

## ⚠️ Important Notes

1. The page uses placeholder images currently
2. Replace them with your actual Figma exports
3. Images must be named exactly as in `IMAGES_README.md`
4. JSON data drives the content - no hardcoded products

## 🐛 Troubleshooting

**Products not showing?**

- Check browser console for errors
- Make sure `src/data/products.json` is valid JSON
- Ensure SCSS has been compiled (`npm run build:css`)

**Images not loading?**

- Check file names match exactly
- Verify images are in `assets/images/` folder
- Use web inspector to see image paths

**Styles not updating?**

- Run `npm run build:css` after SCSS changes
- Or use `npm run watch:css` for auto-compilation
