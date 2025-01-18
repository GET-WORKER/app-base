//function for not to jump to the top of the page when clicking on the links
document.getElementById('nav-links').addEventListener('click', function(event) {
     event.preventDefault();
     console.log('Link clicked, but no page jump!');
});

