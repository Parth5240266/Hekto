# Hekto - Furniture E-Commerce Website

A complete e-commerce homepage built with HTML, SCSS, and Vanilla JavaScript. This project features a modern furniture store design with product galleries, categories, blog sections, and fully responsive layouts.

## Features

- **Modern Design**: Clean, elegant design with pink and purple accents
- **Dynamic Content**: Products, categories, and blog posts loaded from JSON
- **Responsive Layout**: Mobile-first design with grid layouts
- **Interactive Elements**: Hover effects, animations, and overlays
- **Easy to Extend**: Add more products by updating the JSON file

## Project Structure

- `index.html` - Main homepage with all sections
- `src/scss/` - SCSS source files (7-1 architecture)
  - `abstracts/` - Variables, mixins
  - `base/` - Reset, typography, base styles
  - `layout/` - Grid system and layout utilities
  - `components/` - Buttons, cards, reusable components
  - `pages/` - Homepage specific styles
  - `main.scss` - Main entry point
- `src/js/main.js` - JavaScript for dynamic content rendering
- `src/data/products.json` - Product, category, and blog data
- `assets/images/` - Image files (replace with your Figma exports)
- `dist/css/` - Compiled CSS output

## Getting Started

### Installation

```bash
npm install
```

### Development

Start development with live reload:

```bash
npm start
```

This will:

- Watch SCSS files and auto-compile on changes
- Start a live server on http://localhost:3000
- Automatically refresh the browser when files change

Or run commands separately:

```bash
npm run sass    # Watch and compile SCSS
npm run serve   # Start live server on port 3000
npm run build:css  # One-time CSS build
```

## Adding Your Images

1. Export images from Figma as PNG files
2. Place them in `assets/images/` with the exact names listed in `IMAGES_README.md`
3. All placeholders will be automatically replaced

## Adding More Products

Edit `src/data/products.json` and add new product entries:

```json
{
  "id": 13,
  "name": "Product Name",
  "image": "assets/images/your-image.png",
  "price": 45.0,
  "originalPrice": 68.0,
  "colors": ["#FF8A9D", "#7BBDFF"],
  "rating": 4,
  "isFeatured": true,
  "isTrending": false,
  "badge": null
}
```

**Product Properties:**

- `isFeatured: true` - Shows in Featured Products section
- `isTrending: true` - Shows in Trending Products section
- `badge: "New"` - Adds a badge to the product card
- `colors` - Array of hex color codes for color swatches

## Sections

1. **Top Bar** - Language/currency selector, login/wishlist
2. **Header** - Logo, navigation, cart icon
3. **Hero** - Main banner with CTA
4. **Featured Products** - Product showcase (first 4)
5. **Trending Products** - Trending items
6. **What Buyers Offer** - Service highlights
7. **Unique Features** - Product features callout
8. **Discount Item** - Countdown timer and email signup
9. **Top Categories** - Category cards
10. **Newsletter** - Email subscription
11. **Latest Blog** - Blog post cards
12. **Footer** - Links, newsletter, payment icons

## Customization

### Colors

Edit `src/scss/abstracts/_variables.scss` to change the color scheme:

- `$primary-color` - Pink accent color
- `$secondary-color` - Dark blue for text
- `$text-gray` - Gray text color

### Fonts

The site uses Google Fonts:

- **Josefin Sans** - Headings
- **Lato** - Body text

To change fonts, edit:

1. Font family in `_variables.scss`
2. Google Fonts link in `index.html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is open source and available for use.

## Tips

- Use placeholder images during development
- Test on multiple screen sizes
- Keep product images consistent in size
- Update JSON data as you add content from Figma
- Run `npm run watch:css` while developing for automatic compilation
