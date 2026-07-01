document.addEventListener('DOMContentLoaded', () => {
    console.log('App initialized');
    // Load products on home page
    if (document.getElementById('product-grid')) {
        loadProducts();
    }
});

async function loadProducts() {
    const products = await fetchProducts();
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(p => createProductCard(p)).join('');
}
