// FlavorDash - Admin Dashboard
// Authentication and dashboard management

// Hardcoded admin password (in production, this should be server-side)
const ADMIN_PASSWORD = 'admin123';

// Check if already logged in
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';

    if (isLoggedIn) {
        showDashboard();
    } else {
        showLogin();
    }
});

// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;

    if (password === ADMIN_PASSWORD) {
        localStorage.setItem('adminLoggedIn', 'true');
        showDashboard();
    } else {
        alert('Incorrect password. Please try again.');
        document.getElementById('password').value = '';
    }
});

function showLogin() {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('adminDashboard').style.display = 'none';
}

function showDashboard() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    loadDashboardData();
}

function logout() {
    localStorage.removeItem('adminLoggedIn');
    showLogin();
}

function loadDashboardData() {
    // Load menu items from script.js (duplicated here for admin access)
    const menuItems = [
        { id: 1, name: "Spicy Ramen Bowl", category: "Asian Cuisine", price: 14.99, image: "images/spicy-ramen.png", badge: "Popular" },
        { id: 2, name: "Margherita Pizza", category: "Italian", price: 16.99, image: "images/margherita-pizza.png", badge: "Chef's Pick" },
        { id: 3, name: "Grilled Salmon", category: "Seafood", price: 22.99, image: "images/grilled-salmon.png", badge: null },
        { id: 4, name: "Caesar Salad", category: "Salads", price: 11.99, image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop", badge: "Healthy" },
        { id: 5, name: "Chicken Tacos", category: "Mexican", price: 13.99, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop", badge: null },
        { id: 6, name: "Gourmet Burger", category: "American", price: 18.99, image: "images/hero-burger.png", badge: "Best Seller" },
        { id: 7, name: "Pad Thai", category: "Asian Cuisine", price: 15.99, image: "images/pad-thai.png", badge: "Popular" },
        { id: 8, name: "Sushi Platter", category: "Asian Cuisine", price: 28.99, image: "images/sushi-platter.png", badge: "Chef's Pick" },
        { id: 9, name: "Dim Sum Basket", category: "Asian Cuisine", price: 16.99, image: "images/dim-sum.png", badge: null },
        { id: 10, name: "Carbonara Pasta", category: "Italian", price: 17.99, image: "images/carbonara.png", badge: null },
        { id: 11, name: "Mushroom Risotto", category: "Italian", price: 19.99, image: "images/risotto.png", badge: "Chef's Pick" },
        { id: 12, name: "Tiramisu", category: "Desserts", price: 8.99, image: "images/tiramisu.png", badge: null },
        { id: 13, name: "BBQ Ribs", category: "American", price: 24.99, image: "images/bbq-ribs.png", badge: "Best Seller" },
        { id: 14, name: "Mac & Cheese", category: "American", price: 12.99, image: "images/mac-cheese.png", badge: "Comfort Food" },
        { id: 15, name: "Cheesecake", category: "Desserts", price: 9.99, image: "images/cheesecake.png", badge: null },
        { id: 16, name: "Burrito Bowl", category: "Mexican", price: 14.99, image: "images/burrito-bowl.png", badge: "Healthy" },
        { id: 17, name: "Quesadilla", category: "Mexican", price: 13.49, image: "images/quesadilla.png", badge: null },
        { id: 18, name: "Churros", category: "Desserts", price: 7.99, image: "images/churros.png", badge: null },
        { id: 19, name: "Lobster Roll", category: "Seafood", price: 26.99, image: "images/lobster-roll.png", badge: "Premium" },
        { id: 20, name: "Fish Tacos", category: "Seafood", price: 15.99, image: "images/fish-tacos.png", badge: null },
        { id: 21, name: "Chocolate Lava Cake", category: "Desserts", price: 10.99, image: "images/lava-cake.png", badge: "Popular" },
        { id: 22, name: "Ice Cream Sundae", category: "Desserts", price: 6.99, image: "images/ice-cream-sundae.png", badge: null }
    ];

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');

    // Calculate statistics
    const totalOrders = orders.length;
    const totalProducts = menuItems.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const pendingOrders = orders.filter(o => o.status === 'Pending').length;

    // Update statistics
    document.getElementById('totalOrders').textContent = totalOrders;
    document.getElementById('totalProducts').textContent = totalProducts;
    document.getElementById('totalRevenue').textContent = `$${totalRevenue.toFixed(2)}`;
    document.getElementById('pendingOrders').textContent = pendingOrders;

    // Load recent orders (last 5)
    loadRecentOrders(orders.slice(-5).reverse());

    // Load products
    loadProducts(menuItems);
}

function loadRecentOrders(orders) {
    const tableBody = document.getElementById('recentOrdersTable');

    if (orders.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--text-secondary);">No orders yet</td></tr>';
        return;
    }

    tableBody.innerHTML = orders.map(order => {
        const date = new Date(order.date);
        const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const statusClass = `status-${order.status.toLowerCase().replace(/\s/g, '-')}`;

        return `
      <tr>
        <td>${order.id}</td>
        <td>${formattedDate}</td>
        <td>${order.items.length} items</td>
        <td class="price-tag">$${order.total.toFixed(2)}</td>
        <td><span class="status-badge ${statusClass}">${order.status}</span></td>
      </tr>
    `;
    }).join('');
}

function loadProducts(products) {
    const tableBody = document.getElementById('productsTable');

    tableBody.innerHTML = products.slice(0, 10).map(product => `
    <tr>
      <td><img src="${product.image}" alt="${product.name}" class="product-img"></td>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td class="price-tag">$${product.price.toFixed(2)}</td>
      <td>${product.badge ? `<span class="badge-tag">${product.badge}</span>` : '—'}</td>
    </tr>
  `).join('');
}

// Refresh dashboard data every 30 seconds
setInterval(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (isLoggedIn && document.getElementById('adminDashboard').style.display === 'block') {
        loadDashboardData();
    }
}, 30000);
