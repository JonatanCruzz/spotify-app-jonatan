export default function formValidation(email, name, password) {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
  
    if (!email || !email.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/i)) {
      alert("Por favor, ingresa una dirección de correo electrónico válida.");
      return false;
    }
  
    if (!name) {
      alert("Por favor, ingresa un nombre de usuario.");
      return false;
    }
  
    if (!password) {
      alert("Por favor, ingresa una contraseña.");
      return false;
    }

    return true;
  }
  