document.addEventListener('DOMContentLoaded', function () {
    const galleryLinks = document.querySelectorAll('.gallery a');
    var lightbox = new SimpleLightbox('.gallery a', {
        captions: true,               // Activează/desactivează caption-urile
        captionsData: 'alt',          // Folosește atributul "alt" pentru caption
        captionDelay: 250,            // Întârzierea pentru apariția caption-ului (în ms)
        animationSpeed: 300,          // Viteza de tranziție (în ms)
        fadeSpeed: 300,               // Viteza de dispariție (în ms)
    });
    // galleryLinks.forEach(link => {
    //     link.addEventListener('click', function (event) {
    //         event.preventDefault();

    //         // Creează containerul pentru Lightbox
    //         const lightbox = document.createElement('div');
    //         lightbox.classList.add('custom-lightbox');

    //         // Creează imaginea
    //         const img = document.createElement('img');
    //         img.src = link.getAttribute('href');
    //         lightbox.appendChild(img);

    //         const caption = document.createElement('div');
    //         caption.classList.add('caption');
    //         caption.innerText = link.getAttribute('data-caption') || link.querySelector('img').alt;
    //         lightbox.appendChild(caption);

    //         const closeBtn = document.createElement('div');
    //         closeBtn.classList.add('close-btn');
    //         closeBtn.innerHTML = '&times;';
    //         lightbox.appendChild(closeBtn);

    //         closeBtn.addEventListener('click', () => {
    //             lightbox.remove();
    //         });

    //         document.body.appendChild(lightbox);
    //     });
    // });
});

$('#scroll-btn').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate(
        {
            scrollTop: $('#scroll-target').offset().top,
        },
        800
    );
});