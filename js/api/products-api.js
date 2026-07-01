async function fetchProducts() {
    // Mock API call
    return [
        { id: 1, name: 'Laptop', price: 999, image: 'assets/images/placeholder.jpg', description: 'High performance laptop' },
        { id: 2, name: 'Smartphone', price: 699, image: 'assets/images/placeholder.jpg', description: 'Latest smartphone' }
    ];
}

async function fetchProductById(id) {
    return { id, name: 'Product ' + id, price: 100, image: 'assets/images/placeholder.jpg', description: 'Description for ' + id };
}
