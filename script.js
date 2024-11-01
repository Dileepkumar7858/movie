// JavaScript for Search Bar
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('movie-search').value;
    if (query) {
        alert(`Searching for: ${query}`);
        // Here you can implement search functionality or API call
    } else {
        alert('Please enter a search term');
    }
});

// JavaScript for Featured Movies (Optional Expansion)
const movieCards = document.querySelectorAll('.movie-card');

movieCards.forEach(card => {
    card.addEventListener('click', () => {
        alert('You clicked on a movie card!');
        // Add functionality to navigate to movie details page if needed
    });
});
