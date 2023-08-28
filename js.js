document.addEventListener('DOMContentLoaded', function() {
  var circulo1 = document.getElementById('circulo1');
  var circulo2 = document.getElementById('circulo2');
  var lineaxd1 = document.querySelector('.lineaxd1');
  var lineaxd2 = document.querySelector('.lineaxd2');
  var circuloPersonaje = document.querySelector('.circulo_personaje');
  var imagenMeisy = document.getElementById('imagenMeisy');
  var imagenPaul = document.getElementById('imagenPaul');
  var textoMeisy = document.querySelector('.texto-meisy');
  var textoPaul = document.querySelector('.texto-paul');

  // Ocultar el segundo texto por defecto
  textoPaul.style.display = 'none';

  circulo1.addEventListener('click', function() {
    circulo2.style.borderColor = 'black';
    lineaxd2.style.backgroundColor = 'black';

    circulo1.style.borderColor = ''; // Restauramos el color original
    lineaxd1.style.backgroundColor = ''; // Restauramos el color original

    circuloPersonaje.classList.remove('active');
    imagenMeisy.style.opacity = '1';
    imagenMeisy.style.transform = 'scale(1)';
    imagenPaul.style.opacity = '0';
    imagenPaul.style.transform = 'scale(0.8)';
    textoMeisy.style.display = 'block';
    textoPaul.style.display = 'none';
  });

  circulo2.addEventListener('click', function() {
    circulo1.style.borderColor = 'black';
    lineaxd1.style.backgroundColor = 'black';

    circulo2.style.borderColor = '#3b7015'; // Restauramos el color original
    lineaxd2.style.backgroundColor = '#3b7015'; // Restauramos el color original

    circuloPersonaje.classList.remove('active');
    imagenMeisy.style.opacity = '0';
    imagenMeisy.style.transform = 'scale(0.8)';
    imagenPaul.style.opacity = '1';
    imagenPaul.style.transform = 'scale(1)';
    textoMeisy.style.display = 'none';
    textoPaul.style.display = 'block';
  });

  circuloPersonaje.classList.add('border-spin', 'active');
});
