currentLinks = document.querySelectorAll('a[href="index.html"]')
console.log(currentLinks)
currentLinks.forEach(function(link) {
    link.className += ' current-link'
});
