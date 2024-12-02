document.addEventListener('DOMContentLoaded', function () {
    const galleryLinks = document.querySelectorAll('.gallery a');

    galleryLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Creează containerul pentru Lightbox
            const lightbox = document.createElement('div');
            lightbox.classList.add('custom-lightbox');

            // Creează imaginea
            const img = document.createElement('img');
            img.src = link.getAttribute('href');
            lightbox.appendChild(img);

            // Creează textul (caption)
            const caption = document.createElement('div');
            caption.classList.add('caption');
            caption.innerText = link.getAttribute('data-caption') || link.querySelector('img').alt;
            lightbox.appendChild(caption);

            // Creează butonul de închidere
            const closeBtn = document.createElement('div');
            closeBtn.classList.add('close-btn');
            closeBtn.innerHTML = '&times;';
            lightbox.appendChild(closeBtn);

            // Închidere Lightbox
            closeBtn.addEventListener('click', () => {
                lightbox.remove();
            });

            // Adaugă Lightbox-ul în DOM
            document.body.appendChild(lightbox);
        });
    });
});