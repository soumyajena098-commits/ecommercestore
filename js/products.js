async function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const product = await fetchProductById(id);
    const container = document.getElementById('product-detail-container');
    if (container) {
        container.innerHTML = `
            <div class="product-detail">
                <div class="product-image"><img src="${product.image}" alt="${product.name}"></div>
                <div class="product-info">
                    <h1>${product.name}</h1>
                    <p class="product-price">$${product.price}</p>
                    <p class="product-description">${product.description}</p>
                    <button class="btn" onclick="addToCart(${JSON.stringify(product)})">Add to Cart</button>
                </div>
            </div>
        `;
    }
}
