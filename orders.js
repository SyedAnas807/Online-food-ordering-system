// FlavorDash - My Orders Page
// Display and manage order history

document.addEventListener('DOMContentLoaded', () => {
    loadOrders();
});

function loadOrders() {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const ordersEmpty = document.getElementById('ordersEmpty');
    const ordersList = document.getElementById('ordersList');

    if (orders.length === 0) {
        ordersEmpty.style.display = 'flex';
        ordersList.style.display = 'none';
    } else {
        ordersEmpty.style.display = 'none';
        ordersList.style.display = 'flex';
        renderOrders(orders);
    }
}

function renderOrders(orders) {
    const ordersList = document.getElementById('ordersList');

    // Sort orders by date (newest first)
    const sortedOrders = orders.sort((a, b) => new Date(b.date) - new Date(a.date));

    ordersList.innerHTML = sortedOrders.map(order => {
        const date = new Date(order.date);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        const statusClass = `status-${order.status.toLowerCase().replace(/\s/g, '-')}`;

        return `
      <div class="order-card">
        <div class="order-header">
          <div class="order-info">
            <span class="order-id">${order.id}</span>
            <span class="order-date">${formattedDate}</span>
          </div>
          <span class="order-status ${statusClass}">${order.status}</span>
        </div>
        <div class="order-body">
          <div class="order-items">
            ${order.items.map(item => `
              <div class="order-item">
                <div class="order-item-image">
                  <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="order-item-details">
                  <h4 class="order-item-name">${item.name}</h4>
                  <p class="order-item-quantity">Quantity: ${item.quantity}</p>
                </div>
                <span class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            `).join('')}
          </div>
          <div class="order-summary">
            <div class="order-summary-row">
              <span class="order-summary-label">Subtotal</span>
              <span class="order-summary-value">$${order.subtotal.toFixed(2)}</span>
            </div>
            <div class="order-summary-row">
              <span class="order-summary-label">Tax (8%)</span>
              <span class="order-summary-value">$${order.tax.toFixed(2)}</span>
            </div>
            <div class="order-summary-row total">
              <span class="order-summary-label">Total</span>
              <span class="order-summary-value">$${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    `;
    }).join('');
}

// Simulate order status updates (for demo purposes)
function simulateOrderProgress() {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const statuses = ['Pending', 'Preparing', 'Delivering', 'Delivered'];

    orders.forEach(order => {
        const currentIndex = statuses.indexOf(order.status);
        if (currentIndex < statuses.length - 1 && Math.random() > 0.5) {
            order.status = statuses[currentIndex + 1];
        }
    });

    localStorage.setItem('orders', JSON.stringify(orders));
    loadOrders();
}

// Auto-refresh orders every 30 seconds (for demo)
setInterval(() => {
    loadOrders();
}, 30000);
