// Global State
let cart = JSON.parse(localStorage.getItem('ayurCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('ayurWishlist')) || [];

// Save state
function saveCart() {
  localStorage.setItem('ayurCart', JSON.stringify(cart));
  updateCartCounter();
}

function saveWishlist() {
  localStorage.setItem('ayurWishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  updateWishlistCount();
}

// Update Counters
function updateCartCounter() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const badges = document.querySelectorAll('#cart-count');
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

function updateWishlistCount() {
  const count = wishlist.length;
  const badges = document.querySelectorAll('#wishlist-count');
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

// Add to Cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  saveCart();
  showToast("Product added to cart");
}

// Wishlist Logic
function toggleWishlist(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const index = wishlist.findIndex(item => item.id === productId);
  if (index > -1) {
    wishlist.splice(index, 1); // Remove if exists
  } else {
    // Add product object to wishlist
    wishlist.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    showToast("Product added to wishlist");
  }
  saveWishlist();
}

function updateWishlistUI() {
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const id = parseInt(btn.dataset.id);
    if (wishlist.some(item => item.id === id)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Init global UI
document.addEventListener('DOMContentLoaded', () => {
  updateCartCounter();
  updateWishlistUI();
  updateWishlistCount();

  // Mobile menu
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});

// Format Currency
function formatPrice(price) {
  return `₹${price.toLocaleString('en-IN')}`;
}

// WhatsApp Integration
function generateWhatsAppMessage(customerDetails) {
  let message = "Hi, I would like to place an order.\n\n";
  
  let productsList = cart.map(item => `${item.name} (x${item.quantity})`).join(", ");
  let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  message += `Products: ${productsList}\n`;
  message += `Total Price: ₹${total}\n\n`;
  
  message += `Name: ${customerDetails.name}\n`;
  message += `Address: ${customerDetails.address}\n`;
  message += `Phone: ${customerDetails.phone}`;
  
  return encodeURIComponent(message);
}

// Toast Notification Logic
document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('toast-container')) {
    const toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    document.body.appendChild(toastContainer);
  }
});

function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'toast show';
  toast.textContent = message;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
