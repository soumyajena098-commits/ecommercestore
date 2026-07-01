document.getElementById('place-order')?.addEventListener('click', async () => {
    const cart = getStorageItem('cart');
    const response = await createOrder(cart);
    if (response.success) {
        clearStorage('cart');
        alert('Order placed successfully!');
        window.location.href = 'index.html';
    }
});
