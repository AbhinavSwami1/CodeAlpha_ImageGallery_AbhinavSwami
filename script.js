document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-gallery img');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const src = this.getAttribute('src');
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.innerHTML = `
                <span class="close">&times;</span>
                <img src="${src}" alt="Enlarged Image">
            `;
            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', function(event) {
                if (event.target === this || event.target.classList.contains('close')) {
                    this.remove();
                }
            });
        });
    });
});