document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll('.slider-container');

    sliders.forEach(container => {
        const track = container.querySelector('.slider-track');
        const images = Array.from(track.querySelectorAll('img'));
        if (images.length === 0) return;

        // 1. Clone first and last images for seamless looping
        const firstClone = images[0].cloneNode(true);
        const lastClone = images[images.length - 1].cloneNode(true);

        track.appendChild(firstClone);
        track.insertBefore(lastClone, track.firstChild);

        // 2. Set structural indexing variables
        let currentIndex = 1; // Start at 1 because index 0 is now the last clone
        container.setAttribute('slider-index', currentIndex);

        // Calculate layout widths
        const slideWidth = container.querySelector('.slider-window').clientWidth;
        let isTransitioning = false;

        // Set initial starting position matrix to show the first real image
        track.style.transition = 'none';
        track.style.transform = `matrix(1, 0, 0, 1, ${-(currentIndex * slideWidth)}, 0)`;

        // 3. Central movement logic function
        function updateSlider(direction) {
            if (isTransitioning) return; // Prevent clicking spam during animations
            isTransitioning = true;

            const currentWidth = container.querySelector('.slider-window').clientWidth;
            currentIndex += direction;

            // Turn transition back on for standard movement
            track.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            track.style.transform = `matrix(1, 0, 0, 1, ${-(currentIndex * currentWidth)}, 0)`;
            
            container.setAttribute('slider-index', currentIndex);
        }

        // 4. Reset position invisibly when hitting boundaries
        track.addEventListener('transitionend', () => {
            isTransitioning = false;
            const currentWidth = container.querySelector('.slider-window').clientWidth;

            // If we arrived at the duplicate of the first image (at the end)
            if (currentIndex === images.length + 1) {
                track.style.transition = 'none';
                currentIndex = 1; // Snap cleanly to the original first image
                track.style.transform = `matrix(1, 0, 0, 1, ${-(currentIndex * currentWidth)}, 0)`;
            }
            
            // If we arrived at the duplicate of the last image (at the beginning)
            if (currentIndex === 0) {
                track.style.transition = 'none';
                currentIndex = images.length; // Snap cleanly to the original last image
                track.style.transform = `matrix(1, 0, 0, 1, ${-(currentIndex * currentWidth)}, 0)`;
            }

            container.setAttribute('slider-index', currentIndex);
        });

        // 5. Expose moveSlider logic globally to the button clicks
        container.moveSliderInstance = updateSlider;

        // 6. Setup auto-play interval
        setInterval(() => {
            updateSlider(1);
        }, 3500);
    });
});

// Global bridge function so your HTML onclick="moveSlider(this, 1)" works
function moveSlider(button, direction) {
    const container = button.closest('.slider-container');
    if (container && container.moveSliderInstance) {
        container.moveSliderInstance(direction);
    }
}

// Keep layout correct if screen orientation or browser sizes change
window.addEventListener('resize', () => {
    document.querySelectorAll('.slider-container').forEach(container => {
        const track = container.querySelector('.slider-track');
        const currentIndex = parseInt(container.getAttribute('slider-index')) || 1;
        const slideWidth = container.querySelector('.slider-window').clientWidth;
        track.style.transition = 'none';
        track.style.transform = `matrix(1, 0, 0, 1, ${-(currentIndex * slideWidth)}, 0)`;
    });
});