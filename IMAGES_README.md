# Images Required

Place your images from Figma in the `assets/images/` folder with the following names:

## Product Images
- `chair1.png` through `chair12.png` - Product images
- `category1.png` through `category4.png` - Category images

## Hero & Special Images
- `hero-light.png` - Pendant light fixture for hero section
- `hero-chair.png` - Pink armchair for hero section
- `features-chair.png` - Blue armchair for features section
- `discount-chair.png` - Orange/brown armchair for discount section
- `newsletter-bg.png` - Decorative shelf image for newsletter section

## Blog Images
- `blog1.png` through `blog3.png` - Blog post images

## Adding More Products

To add more products, edit `src/data/products.json` and add new entries to the products array:

```json
{
  "id": 13,
  "name": "Your Product Name",
  "image": "assets/images/your-image.png",
  "price": 45.00,
  "originalPrice": 68.00,
  "colors": ["#FF8A9D", "#7BBDFF"],
  "rating": 4,
  "isFeatured": true,
  "isTrending": false,
  "badge": null
}
```

The `colors` array should contain hex color codes for available product variants.
Set `isFeatured: true` to show in featured products section.
Set `isTrending: true` to show in trending products section.
Add a `badge` value like "New" to display a badge on the product card.
