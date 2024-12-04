// assets/js/bookings.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/api/bookings')
        .then(response => response.json())
        .then(data => {
            const bookingsContainer = document.getElementById('bookings-container');
            data.forEach(booking => {
                const div = document.createElement('div');
                div.classList.add('booking-item');
                div.innerHTML = `
                    <h3>Booking for ${booking.listing_title}</h3>
                    <p><strong>Check-in:</strong> ${booking.check_in_date}</p>
                    <p><strong>Check-out:</strong> ${booking.check_out_date}</p>
                    <p><strong>Guest:</strong> ${booking.guest_name}</p>
                `;
                bookingsContainer.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching bookings:', error));
});
