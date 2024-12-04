// assets/js/listings.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/api/listings')
        .then(response => response.json())
        .then(data => {
            const listingContainer = document.getElementById('listing-container');
            data.forEach(listing => {
                const div = document.createElement('div');
                div.classList.add('listing-item');
                div.innerHTML = `
                    <h3>${listing.title}</h3>
                    <p>${listing.description}</p>
                    <p><strong>Price:</strong> $${listing.price_per_night}</p>
                    <p><strong>Location:</strong> ${listing.location}</p>
                `;
                listingContainer.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching listings:', error));
});
