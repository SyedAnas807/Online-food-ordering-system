// FlavorDash - Online Food Ordering System
// Interactive Cart Functionality

// Food Menu Data
const menuItems = [
  {
    id: 1,
    name: "Spicy Ramen Bowl",
    category: "Asian Cuisine",
    description: "Rich tonkotsu broth with tender chashu pork, soft-boiled egg, and fresh vegetables",
    price: 14.99,
    image: "images/spicy-ramen.png",
    badge: "Popular"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    category: "Italian",
    description: "Wood-fired pizza with San Marzano tomatoes, fresh mozzarella, and basil",
    price: 16.99,
    image: "images/margherita-pizza.png",
    badge: "Chef's Pick"
  },
  {
    id: 3,
    name: "Grilled Salmon",
    category: "Seafood",
    description: "Atlantic salmon with honey teriyaki glaze, served with seasonal vegetables",
    price: 22.99,
    image: "images/grilled-salmon.png",
    badge: null
  },
  {
    id: 4,
    name: "Caesar Salad",
    category: "Salads",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, and classic Caesar dressing",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop",
    badge: "Healthy"
  },
  {
    id: 5,
    name: "Chicken Tacos",
    category: "Mexican",
    description: "Three soft tortillas with grilled chicken, pico de gallo, and lime crema",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
    badge: null
  },
  {
    id: 6,
    name: "Gourmet Burger",
    category: "American",
    description: "Premium angus beef with aged cheddar, caramelized onions, and truffle aioli",
    price: 18.99,
    image: "images/hero-burger.png",
    badge: "Best Seller"
  },
  {
    id: 7,
    name: "Pad Thai",
    category: "Asian Cuisine",
    description: "Stir-fried rice noodles with shrimp, peanuts, bean sprouts, and tangy tamarind sauce",
    price: 15.99,
    image: "images/pad-thai.png",
    badge: "Popular"
  },
  {
    id: 8,
    name: "Sushi Platter",
    category: "Asian Cuisine",
    description: "Assorted nigiri and maki rolls with fresh salmon, tuna, and premium sashimi",
    price: 28.99,
    image: "images/sushi-platter.png",
    badge: "Chef's Pick"
  },
  {
    id: 9,
    name: "Dim Sum Basket",
    category: "Asian Cuisine",
    description: "Steamed dumplings including har gow, siu mai, and char siu bao",
    price: 16.99,
    image: "images/dim-sum.png",
    badge: null
  },
  {
    id: 10,
    name: "Carbonara Pasta",
    category: "Italian",
    description: "Creamy spaghetti with crispy pancetta, egg yolk, and aged parmesan",
    price: 17.99,
    image: "images/carbonara.png",
    badge: null
  },
  {
    id: 11,
    name: "Mushroom Risotto",
    category: "Italian",
    description: "Creamy arborio rice with mixed wild mushrooms, truffle oil, and parmesan",
    price: 19.99,
    image: "images/risotto.png",
    badge: "Chef's Pick"
  },
  {
    id: 12,
    name: "Tiramisu",
    category: "Desserts",
    description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream",
    price: 8.99,
    image: "images/tiramisu.png",
    badge: null
  },
  {
    id: 13,
    name: "BBQ Ribs",
    category: "American",
    description: "Slow-cooked pork ribs glazed with smoky BBQ sauce, served with coleslaw",
    price: 24.99,
    image: "images/bbq-ribs.png",
    badge: "Best Seller"
  },
  {
    id: 14,
    name: "Mac & Cheese",
    category: "American",
    description: "Creamy baked macaroni with sharp cheddar and crispy breadcrumb topping",
    price: 12.99,
    image: "images/mac-cheese.png",
    badge: "Comfort Food"
  },
  {
    id: 15,
    name: "Cheesecake",
    category: "Desserts",
    description: "New York style cheesecake with graham cracker crust and fresh strawberry topping",
    price: 9.99,
    image: "images/cheesecake.png",
    badge: null
  },
  {
    id: 16,
    name: "Burrito Bowl",
    category: "Mexican",
    description: "Cilantro lime rice, black beans, grilled chicken, avocado, and fresh salsa",
    price: 14.99,
    image: "images/burrito-bowl.png",
    badge: "Healthy"
  },
  {
    id: 17,
    name: "Quesadilla",
    category: "Mexican",
    description: "Grilled flour tortilla with melted cheese, chicken, and served with sides",
    price: 13.49,
    image: "images/quesadilla.png",
    badge: null
  },
  {
    id: 18,
    name: "Churros",
    category: "Desserts",
    description: "Crispy fried dough pastries dusted with cinnamon sugar and chocolate sauce",
    price: 7.99,
    image: "images/churros.png",
    badge: null
  },
  {
    id: 19,
    name: "Lobster Roll",
    category: "Seafood",
    description: "Fresh lobster meat on a toasted bun with butter, lemon, and chives",
    price: 26.99,
    image: "images/lobster-roll.png",
    badge: "Premium"
  },
  {
    id: 20,
    name: "Fish Tacos",
    category: "Seafood",
    description: "Grilled fish with purple cabbage slaw, cilantro lime crema, and fresh radish",
    price: 15.99,
    image: "images/fish-tacos.png",
    badge: null
  },
  {
    id: 21,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    description: "Warm chocolate cake with molten center, served with vanilla ice cream",
    price: 10.99,
    image: "images/lava-cake.png",
    badge: "Popular"
  },
  {
    id: 22,
    name: "Ice Cream Sundae",
    category: "Desserts",
    description: "Classic vanilla ice cream with chocolate sauce, whipped cream, and cherry",
    price: 6.99,
    image: "images/ice-cream-sundae.png",
    badge: null
  }
];

// Cart State
let cart = [];

// DOM Elements
const foodGrid = document.getElementById('foodGrid');
const cartItemsContainer = document.getElementById('cartItems');
const cartBadge = document.getElementById('cartBadge');
const cartCount = document.getElementById('cartCount');
const subtotalEl = document.getElementById('subtotal');
const taxEl = document.getElementById('tax');
const totalEl = document.getElementById('total');
const cartEmptyState = document.getElementById('cartEmpty');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  renderFoodCards();
  updateCartUI();
});

// Toggle Cart Drawer
function toggleCart() {
  const isOpen = cartDrawer.classList.contains('open');

  if (isOpen) {
    // Close drawer
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  } else {
    // Open drawer
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Render Food Cards
function renderFoodCards() {
  foodGrid.innerHTML = menuItems.map(item => `
    <article class="food-card" data-id="${item.id}">
      <div class="food-card-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        ${item.badge ? `<span class="food-card-badge">${item.badge}</span>` : ''}
      </div>
      <div class="food-card-content">
        <span class="food-card-category">${item.category}</span>
        <h3 class="food-card-title">${item.name}</h3>
        <p class="food-card-description">${item.description}</p>
        <div class="food-card-footer">
          <span class="food-card-price">$${item.price.toFixed(2)}</span>
          <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Add item to cart
function addToCart(itemId) {
  const item = menuItems.find(i => i.id === itemId);
  if (!item) return;

  const existingItem = cart.find(i => i.id === itemId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  updateCartUI();
  showAddedFeedback(itemId);
}

// Remove item from cart
function removeFromCart(itemId) {
  cart = cart.filter(i => i.id !== itemId);
  updateCartUI();
}

// Update item quantity
function updateQuantity(itemId, delta) {
  const item = cart.find(i => i.id === itemId);
  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    removeFromCart(itemId);
  } else {
    updateCartUI();
  }
}

// Update Cart UI
function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  // Update badge
  cartBadge.textContent = totalItems;
  cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
  cartCount.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;

  // Update totals
  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  taxEl.textContent = `$${tax.toFixed(2)}`;
  totalEl.textContent = `$${total.toFixed(2)}`;

  // Enable/disable checkout button
  if (checkoutBtn) {
    checkoutBtn.disabled = cart.length === 0;
  }

  // Show/hide empty state and cart items
  if (cart.length === 0) {
    cartEmptyState.style.display = 'flex';
    cartItemsContainer.style.display = 'none';
  } else {
    cartEmptyState.style.display = 'none';
    cartItemsContainer.style.display = 'block';
    renderCartItems();
  }
}

// Render Cart Items
function renderCartItems() {
  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.name}</h4>
        <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
          <span class="cart-item-qty">${item.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    </div>
  `).join('');
}

// Visual feedback when adding to cart
function showAddedFeedback(itemId) {
  const card = document.querySelector(`.food-card[data-id="${itemId}"]`);
  const btn = card.querySelector('.add-to-cart-btn');

  btn.style.background = '#7ED321';
  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    Added!
  `;

  setTimeout(() => {
    btn.style.background = '';
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
      Add to Cart
    `;
  }, 1500);
}

// Checkout function
function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  // Create order object
  const order = {
    id: 'ORD-' + Date.now(),
    date: new Date().toISOString(),
    items: cart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image
    })),
    subtotal: subtotal,
    tax: tax,
    total: total,
    status: 'Pending'
  };

  // Save to localStorage
  let orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));

  alert(`Order placed successfully!\n\nOrder ID: ${order.id}\nSubtotal: $${subtotal.toFixed(2)}\nTax: $${tax.toFixed(2)}\nTotal: $${total.toFixed(2)}\n\nThank you for ordering with FlavorDash!`);

  cart = [];
  updateCartUI();
  toggleCart();
}

// Filter functionality
function filterMenu(category) {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');

  const cards = document.querySelectorAll('.food-card');

  if (category === 'all') {
    cards.forEach(card => {
      card.style.display = 'block';
      card.style.animation = 'fadeIn 0.5s ease forwards';
    });
  } else {
    cards.forEach((card, index) => {
      const itemId = parseInt(card.dataset.id);
      const item = menuItems.find(i => i.id === itemId);

      if (item.category.toLowerCase().includes(category.toLowerCase())) {
        card.style.display = 'block';
        card.style.animation = 'fadeIn 0.5s ease forwards';
        card.style.animationDelay = `${index * 0.1}s`;
      } else {
        card.style.display = 'none';
      }
    });
  }
}
