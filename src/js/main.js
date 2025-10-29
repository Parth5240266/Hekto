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

  // Generate random 4-color palette for product (pink, teal, magenta, blue)
  const defaultColors = ['#FF8A9D', '#7BBDFF', '#E91E63', '#3F51B5'];
  const swatchesHtml = defaultColors.map(color =>
    `<span class="color-swatch" style="background-color: ${color}"></span>`
  ).join('');

  // Generate random product code

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
        <p class="product-code">Code - ${product.code}</p>
        <p class="product-price">$${product.price.toFixed(2)}</p>
      </div>
    </div>
  `;
}

// Generate trending product card HTML
function generateTrendingProductCard(product) {
  const currentPrice = product.originalPrice && product.originalPrice > product.price 
    ? product.price 
    : product.price;
  const originalPrice = product.originalPrice && product.originalPrice > product.price 
    ? product.originalPrice 
    : null;

  return `
    <div class="trending-product-card">
      <div class="trending-product-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="trending-product-image">
      </div>
      <div class="trending-product-info">
        <h3 class="trending-product-name">${product.name}</h3>
        <div class="trending-price-container">
          <span class="trending-current-price">$${currentPrice.toFixed(2)}</span>
          ${originalPrice ? `<span class="trending-original-price">$${originalPrice.toFixed(2)}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

// Generate latest product card HTML with new design
function generateLatestProductCard(product, index) {
  const currentPrice = product.originalPrice && product.originalPrice > product.price 
    ? product.price 
    : product.price;
  const originalPrice = product.originalPrice && product.originalPrice > product.price 
    ? product.originalPrice 
    : null;
  
  // Add sale badge to the second product (index 1)
  const saleBadge = index === 1 ? '<span class="product-sale-badge">Sale</span>' : '';

  return `
    <div class="latest-product-card">
      <div class="latest-product-image-container">
        <img src="${product.image}" alt="${product.name}" class="latest-product-image">
        ${saleBadge}
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
      </div>
      <div class="latest-product-info">
        <h3 class="latest-product-name">${product.name}</h3>
        <div class="latest-price-info">
          <span class="latest-current-price">$${currentPrice.toFixed(2)}</span>
          ${originalPrice ? `<span class="latest-original-price">$${originalPrice.toFixed(2)}</span>` : ''}
        </div>
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
function renderProducts(products, containerId, isFeatured = false, isTrending = false, page = 0) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let filteredProducts = products;
  if (isFeatured) {
    // For featured products pagination, use all products instead of just featured
    filteredProducts = products;
  } else if (isTrending) {
    filteredProducts = products.filter(p => p.isTrending);
  }

  // Clear container first
  container.innerHTML = '';

  // Show 4 products per page
  const productsPerPage = 4;
  const startIndex = page * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  
  filteredProducts.slice(startIndex, endIndex).forEach(product => {
    container.innerHTML += generateProductCard(product);
  });

  container.classList.remove('slide-out');
  container.classList.add('slide-in');
  
  // Remove slide-in class after animation completes
  setTimeout(() => {
    container.classList.remove('slide-in');
  }, 300);
}

// Render categories
function renderCategories(categories, containerId, page = 0) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Add slide-out animation
  container.classList.remove('slide-in');
  container.classList.add('slide-out');
  
  // Wait for slide-out animation to complete before updating content
  setTimeout(() => {
    // Clear container first
    container.innerHTML = '';

    // Show 4 categories per page
    const categoriesPerPage = 4;
    const startIndex = page * categoriesPerPage;
    const endIndex = startIndex + categoriesPerPage;
    
    categories.slice(startIndex, endIndex).forEach(category => {
      container.innerHTML += generateCategoryCard(category);
    });

    // Add slide-in animation
    container.classList.remove('slide-out');
    container.classList.add('slide-in');
    
    // Remove slide-in class after animation completes
    setTimeout(() => {
      container.classList.remove('slide-in');
    }, 300);
  }, 300);
}

// Render blog posts
function renderBlogPosts(posts, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  posts.forEach(post => {
    container.innerHTML += generateBlogCard(post);
  });
}

// Filter products by category
function filterProductsByCategory(products, category) {
  switch(category) {
    case 'new-arrival':
      return products.filter(p => p.isNewArrival);
    case 'best-seller':
      return products.filter(p => p.isBestSeller);
    case 'featured':
      return products.filter(p => p.isFeatured);
    case 'special-offer':
      return products.filter(p => p.isSpecialOffer);
    default:
      return products.slice(0, 6);
  }
}

// Render latest products based on selected tab
function renderLatestProducts(products, category) {
  const filteredProducts = filterProductsByCategory(products, category);
  const latestContainer = document.getElementById('latestProducts');
  if (!latestContainer) return;

  latestContainer.innerHTML = '';
  
  filteredProducts.slice(0, 6).forEach((product, index) => {
    latestContainer.innerHTML += generateLatestProductCard(product, index);
  });
}

// Initialize pagination for featured products
function initPagination(products, containerId) {
  const paginationDots = document.querySelectorAll('.product-pagination .pagination-dot');
  let currentPage = 0;

  // Calculate number of pages needed (4 products per page)
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Hide dots that aren't needed
  paginationDots.forEach((dot, index) => {
    if (index >= totalPages) {
      dot.style.display = 'none';
    }
  });

  paginationDots.forEach((dot, index) => {
    // Only add click handler if this page has products
    if (index < totalPages) {
      dot.addEventListener('click', () => {
        // Don't do anything if trying to access an empty page
        const startIndex = index * productsPerPage;
        if (startIndex >= products.length) return;

        // Remove active class from all dots
        paginationDots.forEach(d => d.classList.remove('active'));
        
        // Add active class to clicked dot
        dot.classList.add('active');
        
        // Update current page
        currentPage = index;
        
        // Re-render products with new page
        renderProducts(products, containerId, true, false, currentPage);
      });
    }
  });
}

// Initialize pagination for categories
function initCategoryPagination(categories) {
  const paginationDots = document.querySelectorAll('.category-pagination .pagination-dot');
  let currentPage = 0;

  // Calculate number of pages needed (4 categories per page)
  const categoriesPerPage = 4;
  const totalPages = Math.ceil(categories.length / categoriesPerPage);

  // Hide dots that aren't needed
  paginationDots.forEach((dot, index) => {
    if (index >= totalPages) {
      dot.style.display = 'none';
    }
  });

  paginationDots.forEach((dot, index) => {
    // Only add click handler if this page has categories
    if (index < totalPages) {
      dot.addEventListener('click', () => {
        // Don't do anything if trying to access an empty page
        const startIndex = index * categoriesPerPage;
        if (startIndex >= categories.length) return;

        // Remove active class from all dots
        paginationDots.forEach(d => d.classList.remove('active'));
        
        // Add active class to clicked dot
        dot.classList.add('active');
        
        // Update current page
        currentPage = index;
        
        // Re-render categories with new page
        renderCategories(categories, 'topCategories', currentPage);
      });
    }
  });
}

// Initialize tab functionality
function initLatestProductsTabs(products) {
  const tabs = document.querySelectorAll('.product-tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Get the category from tab text
      const tabText = tab.textContent.trim();
      let category = '';
      
      if (tabText === 'New Arrival') {
        category = 'new-arrival';
      } else if (tabText === 'Best Seller') {
        category = 'best-seller';
      } else if (tabText === 'Featured') {
        category = 'featured';
      } else if (tabText === 'Special Offer') {
        category = 'special-offer';
      }
      
      // Render products for selected category
      renderLatestProducts(products, category);
    });
  });
}

// Initialize discount tabs
function initDiscountTabs() {
  const discountNavLinks = document.querySelectorAll('.discount-nav-link');
  
  // Define discount items data
  const discountItems = {
    'wood': {
      title: '20% Discount Of All Products',
      name: 'Wooden Chair Premium',
      description: 'Handcrafted wooden chair with premium oak finish. Perfect for your dining room with elegant design and comfortable seating.',
      features: ['Handcrafted premium oak wood', 'Ergonomic design for comfort', 'Smooth finish and durability', 'Classic style for modern homes'],
      image: 'src/assets/images/latestproduct/chair1.png'
    },
    'plastic': {
      title: '30% Discount Of All Products',
      name: 'Modern Plastic Chair',
      description: 'Contemporary plastic chair with sleek design. Lightweight yet durable, perfect for outdoor or indoor use with modern aesthetics.',
      features: ['Weather-resistant material', 'Lightweight and portable', 'Easy to clean surface', 'Modern minimalist design'],
      image: 'src/assets/images/latestproduct/chair7.png'
    },
    'sofa': {
      title: '25% Discount Of All Products',
      name: 'Eams Sofa Compact',
      description: 'Comfortable compact sofa for small spaces. Elegant design with premium fabric and ergonomic support for maximum comfort.',
      features: ['Compact size for small spaces', 'Premium comfort fabric', 'Ergonomic support system', 'Elegant modern design'],
      image: 'src/assets/images/discountimages/discount-Image.png'
    }
  };

  discountNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all links
      discountNavLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      link.classList.add('active');
      
      // Get the tab type from link text
      const linkText = link.textContent.trim();
      let itemType = 'sofa'; // default
      
      if (linkText === 'Wood Chair') {
        itemType = 'wood';
      } else if (linkText === 'Plastic Chair') {
        itemType = 'plastic';
      } else if (linkText === 'Sofa Collection') {
        itemType = 'sofa';
      }
      
      // Update content
      const item = discountItems[itemType];
      
      document.querySelector('.discount-title').textContent = item.title;
      document.querySelector('.discount-product-name').textContent = item.name;
      document.querySelector('.discount-description').textContent = item.description;
      
      // Update features
      const features = document.querySelectorAll('.discount-features-list li');
      features.forEach((li, index) => {
        if (item.features[index]) {
          li.textContent = item.features[index];
        }
      });
      
      // Update image
      const img = document.querySelector('.discount-chair-image');
      if (img) {
        img.src = item.image;
        img.alt = item.name;
      }
    });
  });
}

// Initialize the page
async function init() {
  const data = await loadProducts();
  if (!data) return;

  // Render featured products
  renderProducts(data.products, 'featuredProducts', true);

  // Initialize pagination for featured products
  initPagination(data.products, 'featuredProducts');

  // Render latest products (showing 6 products with New Arrival category by default)
  renderLatestProducts(data.products, 'new-arrival');
  
  // Initialize tab switching for latest products
  initLatestProductsTabs(data.products);

  // Render trending products
  renderProducts(data.products, 'trendingProducts', false, true);

  // Render second trending products with new design
  const trendingContainer = document.getElementById('trendingProducts2');
  if (trendingContainer) {
    data.products.filter(p => p.isTrending).slice(0, 4).forEach(product => {
      trendingContainer.innerHTML += generateTrendingProductCard(product);
    });
  }

  // Render categories
  renderCategories(data.categories, 'topCategories');

  // Initialize pagination for categories
  initCategoryPagination(data.categories);

  // Render blog posts
  renderBlogPosts(data.blogPosts, 'latestBlog');
  
  // Initialize discount tabs
  initDiscountTabs();
}

// Initialize hero slider
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.nav-dot');
  const prevBtn = document.querySelector('.hero-nav-prev');
  const nextBtn = document.querySelector('.hero-nav-next');
  
  let currentSlide = 0;
  let isTransitioning = false;

  function showSlide(index) {
    if (isTransitioning) return;
    
    isTransitioning = true;
    
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
    
    // Reset transition flag after animation
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  // Event listeners for navigation dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (index !== currentSlide) {
        showSlide(index);
      }
    });
  });

  // Event listeners for arrow buttons
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }

  // Auto-slide functionality (optional)
  setInterval(nextSlide, 6000);
}

// Start the app
document.addEventListener('DOMContentLoaded', () => {
  init();
  initHeroSlider();
});