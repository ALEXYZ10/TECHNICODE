function validarFormulario1() {
    var ruc = document.getElementById("ruc").value;
    var direccionFiscal = document.getElementById("direccionFiscal").value;
    var tipoDocumento = document.getElementById("tipoDocumento").value;
    var numeroDocumento = document.getElementById("numeroDocumento").value;
    var nombres = document.getElementById("nombres").value;
    var apellidoPaterno = document.getElementById("apellidoPaterno").value;
    var apellidoMaterno = document.getElementById("apellidoMaterno").value;
    var correoElectronico = document.getElementById("correoElectronico").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
  
    if (
      ruc === "" ||
      direccionFiscal === "" ||
      tipoDocumento === "" ||
      numeroDocumento === "" ||
      nombres === "" ||
      apellidoPaterno === "" ||
      apellidoMaterno === "" ||
      correoElectronico === "" ||
      telefono === "" ||
      email === ""
    ) {
      alert("Por favor, complete todos los campos.");
      return false;
    }
  
    var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(correoElectronico) || !regexCorreo.test(email)) {
      alert("Formato de correo electrónico inválido.");
      return false;
    }
  
    var regexTelefono = /^\d{3} \d{3} \d{4}$/;
    if (!regexTelefono.test(telefono)) {
      alert("Formato de teléfono inválido.");
      return false;
    }
  
    return true;
  }
  
  function validarFormulario2() {
    console.log("Validando formulario 2");
    var montoReclamo = document.getElementById("montoReclamo").value;
    var asunto = document.getElementById("asunto").value;
    var numeroBoleta = document.getElementById("numeroBoleta").value;
    var detallesReclamo = document.getElementById("detallesReclamo").value;
    var pedido = document.getElementById("pedido").value;
  
    if (
      montoReclamo === "" ||
      asunto === "" ||
      numeroBoleta === "" ||
      detallesReclamo === "" ||
      pedido === ""
    ) {
      alert("Por favor, complete todos los campos.");
      return false;
    }
  
    return true;
  }
  
  function validarFormulario3() {
    console.log("validando formulario 3");
    var menorEdad = document.getElementById("menorEdad").checked;
    var tipoDocumento = document.getElementById("tipoDocumento").value;
    var numeroDocumento = document.getElementById("numeroDocumento").value;
    var nombres = document.getElementById("nombres").value;
    var apellidoPaterno = document.getElementById("apellidoPaterno").value;
    var apellidoMaterno = document.getElementById("apellidoMaterno").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
  
    if (!menorEdad) {
      alert("Por favor, seleccione si es menor de edad.");
      return false;
    }
  
    if (tipoDocumento === "") {
      alert("Por favor, seleccione el tipo de documento.");
      return false;
    }
  
    if (numeroDocumento === "") {
      alert("Por favor, ingrese su número de documento.");
      return false;
    }
  
    if (nombres === "") {
      alert("Por favor, ingrese sus nombres.");
      return false;
    }
  
    if (apellidoPaterno === "") {
      alert("Por favor, ingrese su apellido paterno.");
      return false;
    }
  
    if (apellidoMaterno === "") {
      alert("Por favor, ingrese su apellido materno.");
      return false;
    }
  
    if (telefono === "") {
      alert("Por favor, ingrese su teléfono.");
      return false;
    }
  
    if (email === "") {
      alert("Por favor, ingrese su correo electrónico.");
      return false;
    }
  
    var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(email)) {
      alert("Formato de correo electrónico inválido.");
      return false;
    }
  
    var regexTelefono = /^\d{3} \d{3} \d{4}$/;
    if (!regexTelefono.test(telefono)) {
      alert("Formato de teléfono inválido.");
      return false;
    }
  
    return true;
  }
  
  document.getElementById("formulario1").addEventListener("submit", function (event) {
    if (!validarFormulario1()) {
      event.preventDefault();
    } else {
      window.location.href = "reclamaciones(2).html";
    }
  });
  
  document.getElementById("formulario2").addEventListener("submit", function (event) {
    if (!validarFormulario2()) {
      event.preventDefault();
    } else {
      window.location.href = "reclamaciones(3).html";
    }
  });
  
  document.getElementById("formulario3").addEventListener("submit", function (event) {
    if (!validarFormulario3()) {
      event.preventDefault();
    } else {
      alert("¡Felicitaciones! Su formulario ha sido enviado con éxito.");
      event.preventDefault();
    }
  });
