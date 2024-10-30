//inicio de los slider de la pagina de presentación.
let currentCategory = '';
let currentIndex = 0;
let interval;
let isCategoryOpen = false; // Estado para verificar si la categoría está abierta

function filterImages(category) {
  // Verifica si la misma categoría ya está abierta
  if (isCategoryOpen && currentCategory === category) {
    closeSlider(); // Llama a la función para cerrar el slider
    return;
  }

  // Abre o cambia la categoría
  clearInterval(interval); // Limpia cualquier intervalo previo
  currentCategory = category;
  currentIndex = 0;
  isCategoryOpen = true; // Marca que la categoría está abierta
  
  const images = document.querySelectorAll('.logo-slider img');
  images.forEach(img => {
    img.classList.remove('active');
    img.style.display = 'none'; // Oculta todas las imágenes
  });

  // Muestra el primer grupo de 4 imágenes de la categoría seleccionada
  const categoryImages = document.querySelectorAll(`.logo-slider img.${category}`);
  displayImagesGroup(categoryImages, currentIndex);

  // Configura el desplazamiento automático cada 2 segundos
  interval = setInterval(() => {
    slideImages(categoryImages);
  }, 2000);
}

function displayImagesGroup(images, startIndex) {
  // Muestra un grupo de 4 imágenes a partir del índice indicado
  for (let i = startIndex; i < startIndex + 4; i++) {
    if (images[i % images.length]) { // % asegura que vuelva al inicio si el índice supera la cantidad de imágenes
      images[i % images.length].style.display = 'inline-block';
      images[i % images.length].classList.add('active');
    }
  }
}

function slideImages(images) {
  // Oculta el grupo actual de 4 imágenes
  images.forEach(img => {
    img.classList.remove('active');
    img.style.display = 'none';
  });

  // Actualiza el índice para mostrar el siguiente grupo de 4 imágenes
  currentIndex = (currentIndex + 4) % images.length;

  // Muestra el siguiente grupo de 4 imágenes
  displayImagesGroup(images, currentIndex);
}

function closeSlider() {
  // Oculta todas las imágenes y limpia el intervalo
  const images = document.querySelectorAll('.logo-slider img');
  images.forEach(img => {
    img.classList.remove('active');
    img.style.display = 'none';
  });

  clearInterval(interval); // Detiene el intervalo de desplazamiento
  isCategoryOpen = false;  // Marca que la categoría está cerrada
  currentCategory = ''; // Reinicia la categoría actual
}



// fin de lo slider de la pagina de presentación.


// NOSOTROSSSSS


$(document).ready(function(){
    $(".packages-carousel").owlCarousel({
        items: 3, // Número de tarjetas visibles a la vez
        loop: true, // Hacer el carrusel en bucle
        margin: 10, // Espacio entre tarjetas
        nav: false, // Mostrar botones de navegación
        autoplay: true, // Activar la reproducción automática
        autoplayTimeout: 5000, // Tiempo entre transiciones (2 segundos)
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
