/**
 * Fast & Furious PWA - app.js
 * Handles application lifecycle, dynamic UI rendering, and Service Worker registration.
 */

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

/**
 * Initializes the application by registering the service worker and loading data.
 */
function initApp() {
    registerServiceWorker();
    
    // Check if data is available from data.js
    if (typeof moviesData !== 'undefined') {
        renderMovies(moviesData);
    } else if (typeof data !== 'undefined') {
        renderMovies(data);
    } else {
        fetchDataFallback();
    }
}

/**
 * Registers the Service Worker for offline capabilities.
 */
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(reg => console.log('Service Worker registered successfully.', reg.scope))
                .catch(err => console.error('Service Worker registration failed:', err));
        });
    }
}

/**
 * Dynamically renders movie cards into the main container.
 * @param {Array} movies - Array of movie objects
 */
function renderMovies(movies) {
    const container = document.getElementById('movies-container') || document.querySelector('.container') || document.body;
    
    // Clear container except for headers if any
    const existingGrid = document.querySelector('.movies-grid');
    if (existingGrid) existingGrid.remove();

    const grid = document.createElement('div');
    grid.className = 'movies-grid';
    
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        
        card.innerHTML = `
            <div class="card-image">
                <img src="${movie.image || 'icon.svg'}" alt="${movie.title}" onerror="this.src='icon.svg'">
            </div>
            <div class="card-content">
                <h3>${movie.title}</h3>
                <p class="year"><strong>Year:</strong> ${movie.year}</p>
                <p class="description">${movie.description || ''}</p>
                ${movie.cars ? `<p class="cars"><strong>Featured Cars:</strong> ${movie.cars.join(', ')}</p>` : ''}
            </div>
        `;
        grid.appendChild(card);
    });
    
    container.appendChild(grid);
}

/**
 * Fallback mechanism if data is not loaded globally.
 */
function fetchDataFallback() {
    console.warn('Global data array not found. Attempting to fetch or render mock data.');
    // Mock data based on Fast & Furious franchise
    const fallbackData = [
        { title: "The Fast and the Furious", year: 2001, description: "Los Angeles street racer Dominic Toretto falls under the suspicion of the LAPD.", cars: ["1970 Dodge Charger R/T", "1994 Toyota Supra"] },
        { title: "2 Fast 2 Furious", year: 2003, description: "Former cop Brian O'Conner is called upon to bust a dangerous criminal in Miami.", cars: ["1999 Nissan Skyline GT-R R34", "2002 Mitsubishi Lancer Evolution VII"] },
        { title: "The Fast and the Furious: Tokyo Drift", year: 2006, description: "An American teenager Nissan street racer is sent to live with his father in Tokyo.", cars: ["1997 Mazda RX-7 VeilSide", "2006 Mitsubishi Lancer Evolution IX"] }
    ];
    renderMovies(fallbackData);
}
