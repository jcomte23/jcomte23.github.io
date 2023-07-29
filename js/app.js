// JavaScript para el desplazamiento automático de la galería
    const gallery = document.querySelector('.gallery');
    // Clonar las imágenes para crear el efecto continuo
    const images = gallery.querySelectorAll('.card');

    const totalImages = images.length;
    for (let i = 0; i < totalImages; i++) {
      gallery.appendChild(images[i].cloneNode(true));
    }
    // Establecer la duración de la animación
    const animationDuration = 50; // Ajustar según la velocidad deseada
    // Animación del desplazamiento horizontal
    gallery.style.animation = `slide ${animationDuration}s linear infinite`;