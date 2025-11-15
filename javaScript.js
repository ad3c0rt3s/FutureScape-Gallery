document.addEventListener('DOMContentLoaded', function() {
    // Starfield creation
    function createStars(count) {
        const universe = document.getElementById('starfield');
        if (!universe) return;

        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = '2px';
            star.style.height = '2px';
            star.style.backgroundColor = 'white';
            star.style.left = `${Math.random() * window.innerWidth}px`;
            star.style.top = `${Math.random() * window.innerHeight}px`;
            star.style.boxShadow = `0 0 5px #fff, 0 0 10px #fff`;
            universe.appendChild(star);
            animateStar(star);
        }
    }

    function animateStar(star) {
        const timer = Math.random() * 3000 + 5000;
        setTimeout(() => {
            star.style.left = `${Math.random() * window.innerWidth}px`;
            star.style.top = `${Math.random() * window.innerHeight}px`;
            animateStar(star);
        }, timer);
    }

    // Initialize the starfield
    createStars(150);

    // Function to show categories after clicking "Start"
    window.showCategories = function() {
        document.querySelector('.content').classList.add('hidden');
        document.getElementById('categories').classList.remove('hidden');
    }

    // Function to show the selected category
    window.showCategory = function(categoryId) {
        // Hide the categories section
        document.getElementById('categories').classList.add('hidden');

        // Hide all category descriptions
        const descriptions = document.querySelectorAll('.category-description');
        descriptions.forEach(desc => desc.classList.add('hidden'));

        // Show the selected category description
        const element = document.getElementById(categoryId);
        if (element) {
            element.classList.remove('hidden');
        } else {
            console.error('No element found with ID:', categoryId);
        }
    }

    // Function to open the main art gallery section
    window.exploreGallery = function() {
        console.log('Explore button clicked'); // Debugging log
        const introSection = document.getElementById('art-gallery-section');
        const mainGallery = document.getElementById('art-gallery');

        if (introSection && mainGallery) {
            introSection.classList.add('hidden');
            mainGallery.classList.remove('hidden');
            console.log('Art gallery section displayed'); // Debugging log
        } else {
            console.error('Gallery sections not found');
        }
    }
});
