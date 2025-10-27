// Load products data
async function loadProducts() {
  try {
    const response = await fetch('src/data/products.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading products:', error);
    return null;
  }
}

// Generate star rating HTML
function generateStars(rating) {
  let starsHtml = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsHtml += '<span class="star filled">★</span>';
    } else {
      starsHtml += '<span class="star">☆</span>';
    }
  }
  return starsHtml;
}

// Generate product card HTML
function generateProductCard(product) {
  const badgeHtml = product.badge ? `<span class="product-badge ${product.badge.toLowerCase()}">${product.badge}</span>` : '';
  const colorsHtml = product.colors.map(color =>
    `<span class="color-swatch" style="background-color: ${color}"></span>`
  ).join('');

  // Generate random 4-color palette for product (pink, teal, magenta, blue)
  const defaultColors = ['#FF8A9D', '#7BBDFF', '#E91E63', '#3F51B5'];
  const swatchesHtml = defaultColors.map(color =>
    `<span class="color-swatch" style="background-color: ${color}"></span>`
  ).join('');

  // Generate random product code
  const productCode = `Y${Math.floor(Math.random() * 1000000)}`;

  return `
    <div class="product-card">
      ${badgeHtml}
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-overlay">
          <button class="overlay-btn" aria-label="Add to cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19C19.5304 16 20.0391 15.7893 20.4142 15.4142C20.7893 15.0391 21 14.5304 21 14V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7 16H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="overlay-btn" aria-label="Add to wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="overlay-btn" aria-label="Quick view">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>
        </div>
        <button class="view-details-btn">View Details</button>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div class="color-swatches">${swatchesHtml}</div>
        <p class="product-code">Code - ${productCode}</p>
        <p class="product-price">$${product.price.toFixed(2)}</p>
      </div>
    </div>
  `;
}

// Generate category card HTML
function generateCategoryCard(category) {

  return `
    <div class="category-card">
      <div class="base-container"></div>
      <div class="category-image-container">
        <img src="${category.image}" alt="${category.name}" class="category-image">
        <button class="category-view-all">View Shop</button>
      </div>
      <div class="category-info">
        <h3 class="category-name">${category.name}</h3>
        <p class="category-count">${category.itemCount} Items</p>
      </div>
    </div>
  `;
}

// Generate blog post card HTML
function generateBlogCard(post) {
  return `
    <div class="blog-card">
      <div class="blog-image-container">
        <img src="${post.image}" alt="${post.title}">
      </div>
      <div class="blog-content">
        <div class="blog-meta">
          <span class="blog-meta-item">
            <img src="src/assets/images/BlogImages/AuthorIcon.png" alt="Author" class="author-icon" />
            <span class="blog-author-name">${post.author}</span>
          </span>
          <span class="blog-meta-item">
            <img src="src/assets/images/BlogImages/uil_calendar-alt.png" alt="Date" class="date-icon" />
            <span class="blog-date">${post.date}</span>
          </span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-description">${post.description}</p>
        <a href="${post.url}" class="blog-link">Read More</a>
      </div>
    </div>
  `;
}

// Render products
function renderProducts(products, containerId, isFeatured = false, isTrending = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let filteredProducts = products;
  if (isFeatured) {
    filteredProducts = products.filter(p => p.isFeatured);
  } else if (isTrending) {
    filteredProducts = products.filter(p => p.isTrending);
  }

  // Show first 4 products
  filteredProducts.slice(0, 4).forEach(product => {
    container.innerHTML += generateProductCard(product);
  });
}

// Render categories
function renderCategories(categories, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  categories.forEach(category => {
    container.innerHTML += generateCategoryCard(category);
  });
}

// Render blog posts
function renderBlogPosts(posts, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  posts.forEach(post => {
    container.innerHTML += generateBlogCard(post);
  });
}

// Initialize the page
async function init() {
  const data = await loadProducts();
  if (!data) return;

  // Render featured products
  renderProducts(data.products, 'featuredProducts', true, false);

  // Render latest products (showing 6 products)
  const latestContainer = document.getElementById('latestProducts');
  if (latestContainer) {
    data.products.slice(0, 6).forEach(product => {
      latestContainer.innerHTML += generateProductCard(product);
    });
  }

  // Render trending products
  renderProducts(data.products, 'trendingProducts', false, true);

  // Render second trending products
  renderProducts(data.products, 'trendingProducts2', false, true);

  // Render categories
  renderCategories(data.categories, 'topCategories');

  // Render blog posts
  renderBlogPosts(data.blogPosts, 'latestBlog');
}

// Start the app
document.addEventListener('DOMContentLoaded', init);