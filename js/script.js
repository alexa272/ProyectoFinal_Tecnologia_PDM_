/**
 * Archivo: script.js
 * Propósito: Funcionalidad interactiva del sitio web
 * Autor: Alexandra Santa Muñoz
 * Fecha: 14/01/2026
 * 
 * Dependencias:
 * - Ninguna (Vanilla JavaScript)
 * 
 * Descripción:
 * Maneja la validaciones correspondientes para el formulario de contacto
 */


// Validaciones para el formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const telefono = document.getElementById('telefono');
  const servicio = document.getElementById('servicio');
  const mensaje = document.getElementById('mensaje');
  const btnEnviar = document.querySelector('.btn-enviar');
  const mensajeRespuesta = document.getElementById('mensajeRespuesta');

  // Función para mostrar error
  function mostrarError(input, mensaje) {
    const formGroup = input.parentElement;
    
    // Remover error anterior si existe
    const errorAnterior = formGroup.querySelector('.error-mensaje');
    if (errorAnterior) {
      errorAnterior.remove();
    }

    // Agregar clase de error
    input.classList.add('input-error');
    input.classList.remove('input-valido');

    // Crear mensaje de error
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-mensaje';
    errorDiv.textContent = mensaje;
    formGroup.appendChild(errorDiv);
  }

  // Función para mostrar éxito
  function mostrarExito(input) {
    const formGroup = input.parentElement;
    
    // Remover error si existe
    const errorAnterior = formGroup.querySelector('.error-mensaje');
    if (errorAnterior) {
      errorAnterior.remove();
    }

    // Agregar clase de válido
    input.classList.remove('input-error');
    input.classList.add('input-valido');
  }

  // Validar nombre
  function validarNombre() {
    const nombreValor = nombre.value.trim();
    
    if (nombreValor === '') {
      mostrarError(nombre, 'El nombre es obligatorio');
      return false;
    }
    
    if (nombreValor.length < 3) {
      mostrarError(nombre, 'El nombre debe tener al menos 3 caracteres');
      return false;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreValor)) {
      mostrarError(nombre, 'El nombre solo debe contener letras');
      return false;
    }

    mostrarExito(nombre);
    return true;
  }

  // Validar email
  function validarEmail() {
    const emailValor = email.value.trim();
    
    if (emailValor === '') {
      mostrarError(email, 'El correo electrónico es obligatorio');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValor)) {
      mostrarError(email, 'Ingresa un correo electrónico válido');
      return false;
    }

    mostrarExito(email);
    return true;
  }

  // Validar teléfono
  function validarTelefono() {
    const telefonoValor = telefono.value.trim();
    
    if (telefonoValor === '') {
      mostrarError(telefono, 'El teléfono es obligatorio');
      return false;
    }

    // Remover espacios, guiones y paréntesis para validar
    const telefonoLimpio = telefonoValor.replace(/[\s\-\(\)\+]/g, '');
    
    if (!/^\d{7,15}$/.test(telefonoLimpio)) {
      mostrarError(telefono, 'Ingresa un teléfono válido (7-15 dígitos), Sólo números');
      return false;
    }

    mostrarExito(telefono);
    return true;
  }

  // Validar servicio
  function validarServicio() {
    if (servicio.value === '') {
      mostrarError(servicio, 'Debes seleccionar un servicio');
      return false;
    }

    mostrarExito(servicio);
    return true;
  }

  // Validar mensaje (opcional pero con mínimo)
  function validarMensaje() {
    const mensajeValor = mensaje.value.trim();
    
    if (mensajeValor !== '' && mensajeValor.length < 10) {
      mostrarError(mensaje, 'El mensaje debe tener al menos 10 caracteres');
      return false;
    }

    if (mensajeValor !== '') {
      mostrarExito(mensaje);
    }
    return true;
  }

  // Validación en tiempo real
  nombre.addEventListener('blur', validarNombre);
  email.addEventListener('blur', validarEmail);
  telefono.addEventListener('blur', validarTelefono);
  servicio.addEventListener('change', validarServicio);
  mensaje.addEventListener('blur', validarMensaje);

  // Validación al enviar el formulario
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validar todos los campos
    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const telefonoValido = validarTelefono();
    const servicioValido = validarServicio();
    const mensajeValido = validarMensaje();

    // Si todo es válido, enviar el formulario
    if (nombreValido && emailValido && telefonoValido && servicioValido && mensajeValido) {
      // Mostrar estado de carga
      btnEnviar.disabled = true;
      document.querySelector('.btn-text').style.display = 'none';
      document.querySelector('.btn-loading').style.display = 'inline';

      // Enviar formulario
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          mensajeRespuesta.textContent = '¡Mensaje enviado con éxito! Te contactaremos pronto.';
          mensajeRespuesta.className = 'mensaje-respuesta exito';
          mensajeRespuesta.style.display = 'block';
          form.reset();
          
          // Limpiar clases de validación
          document.querySelectorAll('.input-valido').forEach(input => {
            input.classList.remove('input-valido');
          });
        } else {
          throw new Error('Error en el envío');
        }
      })
      .catch(error => {
        mensajeRespuesta.textContent = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.';
        mensajeRespuesta.className = 'mensaje-respuesta error';
        mensajeRespuesta.style.display = 'block';
      })
      .finally(() => {
        // Restaurar botón
        btnEnviar.disabled = false;
        document.querySelector('.btn-text').style.display = 'inline';
        document.querySelector('.btn-loading').style.display = 'none';
      });
    } else {
      // Scroll al primer error
      const primerError = form.querySelector('.input-error');
      if (primerError) {
        primerError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        primerError.focus();
      }
    }
  });
});