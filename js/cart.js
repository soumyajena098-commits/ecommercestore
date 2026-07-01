function addToCart(product) {
    let cart = getStorageItem('cart') || [];
    cart.push(product);
    setStorageItem('cart', cart);
    updateCartUI();
}

function updateCartUI() {
    const cart = getStorageItem('cart') || [];
    const container = document.getElementById('cart-items');
    if (container) {
        container.innerHTML = cart.map(item => `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>$${item.price}</span>
            </div>
        `).join('');
    }
}
