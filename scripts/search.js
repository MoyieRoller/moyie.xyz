function searchDuckDuckGo() {
    const query = document.getElementById('searchInput').value;
    const url = `https://www.duckduckgo.com/?q=${encodeURIComponent(query)}`;
    window.location.href = url;
}

document.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {
        searchDuckDuckGo();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key) {
        document.getElementById('searchInput').focus();
    }
});