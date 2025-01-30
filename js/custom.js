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

const app = Vue.createApp({
    data() {
      return {
        images: [
          { src: "img/g1.jpg" },
          { src: "img/g2.jpg" },
          { src: "img/g3.jpg" },
          { src: "img/g4.jpg" },
          { src: "img/g5.jpg" },
          { src: "img/g6.jpg" },
          { src: "img/g7.jpg" }
        ],
      };
    },
  });

  app.mount("#gallery_vue_app");

/*START ABOUT PAGE STYLE*/

const projectGallery = Vue.createApp({
  data() {
      return {
          projects: [
              { 
                  src: "https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?auto=format&fit=crop&w=700&q=80", 
                  category: "Websites", 
                  title: "Front-End",
                  description: "Design modern și atractiv"
              },
              { 
                  src: "https://images.unsplash.com/photo-1521104955835-ba91c70d6443?auto=format&fit=crop&w=700&q=80", 
                  category: "Pure CSS", 
                  title: "Front-End",
                  description: "Minimalist și eficient"
              },
              { 
                  src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80", 
                  category: "Web Apps", 
                  title: "Full-Stack",
                  description: "Funcțional și interactiv"
              },
              { 
                  src: "https://images.unsplash.com/photo-1472437774355-71ab6752b434?auto=format&fit=crop&w=700&q=80", 
                  category: "Daily UI", 
                  title: "UI/UX Design",
                  description: "Experiență fluidă și intuitivă"
              },
              { 
                  src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=700&q=80", 
                  category: "Websites", 
                  title: "Front-End",
                  description: "Performanță și accesibilitate"
              },
              { 
                  src: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=700&q=80", 
                  category: "Pure CSS", 
                  title: "Front-End",
                  description: "Animații și tranziții fluide"
              },
              { 
                  src: "https://images.unsplash.com/photo-1481762554390-ff5562748bdf?auto=format&fit=crop&w=700&q=80", 
                  category: "Web Apps", 
                  title: "Full-Stack",
                  description: "Scalabil și ușor de întreținut"
              },
              { 
                  src: "https://images.unsplash.com/photo-1463620695885-8a91d87c53d0?auto=format&fit=crop&w=700&q=80", 
                  category: "Daily UI", 
                  title: "UI/UX Design",
                  description: "Interfață plăcută și responsivă"
              }
          ],
          showOverlay: false,
          selectedProject: {}
      };
  },
  methods: {
      openOverlay(project) {
          this.selectedProject = project;
          this.showOverlay = true;
      }
  }
});

projectGallery.mount("#projectGallery");

const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');

function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
}

function close() {
  overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);





/*END ABOUT PAGE STYLE*/