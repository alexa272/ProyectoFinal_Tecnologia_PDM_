// Configuración de EmailJS
(function() {
  emailjs.init("TU_PUBLIC_KEY"); // Reemplaza con tu Public Key de EmailJS
})();

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const btnEnviar = document.querySelector('.btn-enviar');
  const btnText = document.querySelector('.btn-text');
  const btnLoading = document.querySelector('.btn-loading');
  const mensajeRespuesta = document.getElementById('mensajeRespuesta');
  
  // Mostrar estado de carga
  btnEnviar.disabled = true;
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline-block';
  mensajeRespuesta.style.display = 'none';
  
  // Obtener los datos del formulario
  const templateParams = {
    nombre: document.getElementById('nombre').value,
    email: document.getElementById('email').value,
    telefono: document.getElementById('telefono').value,
    servicio: document.getElementById('servicio').value,
    mensaje: document.getElementById('mensaje').value
  };
  
  // Enviar email usando EmailJS
  emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      
      // Mostrar mensaje de éxito
      mensajeRespuesta.textContent = '¡Mensaje enviado con éxito! Te contactaremos pronto.';
      mensajeRespuesta.className = 'mensaje-respuesta exito';
      
      // Limpiar formulario
      document.getElementById('contactForm').reset();
      
      // Resetear botón
      btnEnviar.disabled = false;
      btnText.style.display = 'inline-block';
      btnLoading.style.display = 'none';
      
    }, function(error) {
      console.log('FAILED...', error);
      
      // Mostrar mensaje de error
      mensajeRespuesta.textContent = 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo.';
      mensajeRespuesta.className = 'mensaje-respuesta error';
      
      // Resetear botón
      btnEnviar.disabled = false;
      btnText.style.display = 'inline-block';
      btnLoading.style.display = 'none';
    });
});