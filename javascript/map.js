// Function to initialize the map with given coordinates and description
function initializeMap(lat, lng, description) {
    var map = L.map('map').setView([lat, lng], 13);

    // Set up the OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to the map
    L.marker([lat, lng]).addTo(map)
        .bindPopup(description)
        .openPopup();
}