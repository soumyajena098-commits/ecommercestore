function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${formatPrice(product.price)}</p>
            <a href="product-detail.html?id=${product.id}" class="btn">View Details</a>
        </div>
    `;
}
