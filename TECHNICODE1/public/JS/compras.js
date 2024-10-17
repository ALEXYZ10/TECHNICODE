const distrito = document.getElementById('distrito');
const direccion = document.getElementById('dreccion');
const telefono = document.getElementById('telefono');
const referencia = document.getElementById('referencia');

formulario.addEventListener('submit', (e) => {
    const patron = /^\d{3}-\d{3}-\d{4}$/; // Patrón para número de teléfono (XXX-XXX-XXXX)
    if (!patron.test(telefono.value)) {
      errorTelefono.style.display = 'block';
      errorTelefono.innerText = 'Número de teléfono inválido. (Ej: 123-456-7890)';
      e.preventDefault();
    } else {
      // Enviar formulario
    }
  });
  