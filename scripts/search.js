function searchDuckDuckGo() {
    const query = document.getElementById('searchInput').value;
    const url = `https://www.duckduckgo.com/?q=${encodeURIComponent(query)}`;
    window.location.href = url;
}

document.addEventListener('submit', searchDuckDuckGo)

document.addEventListener('keydown', function(event) {
    if (event.key) {
        document.getElementById('searchInput').focus();
    }
});