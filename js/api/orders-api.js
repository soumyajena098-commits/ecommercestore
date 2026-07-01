async function createOrder(orderData) {
    return { success: true, orderId: 'ORD-' + Date.now() };
}
