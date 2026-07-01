function setStorageItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getStorageItem(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

function clearStorage(key) {
    localStorage.removeItem(key);
}

function saveToken(token) {
    setStorageItem('auth_token', token);
}
