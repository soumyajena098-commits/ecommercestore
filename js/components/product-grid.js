function renderProductGrid(products) {
    const grid = document.getElementById('product-grid');
    if (grid) {
        grid.innerHTML = products.map(p => createProductCard(p)).join('');
    }
}
