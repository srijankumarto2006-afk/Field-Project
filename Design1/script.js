   // Simple scroll animation for navigation
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('header');
            if (window.scrollY > 50) {
                nav.classList.add('scale-95', 'transition-transform');
            } else {
                nav.classList.remove('scale-95');
            }
        });

        // Click interaction for "Reserve Your Table"
        document.querySelector('.btn-shine').addEventListener('click', function() {
            this.innerHTML = "Opening Menu...";
            setTimeout(() => {
                this.innerHTML = "Reserve Your Table";
            }, 2000);
        });