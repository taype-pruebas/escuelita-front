const correo = document.querySelector("#correo");
const contra = document.querySelector("#contra");

const btn = document.querySelector("#btn");

// Ejemplo implementando el metodo POST:
async function postData(url = "", data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

btn.addEventListener("click", () => {
  console.log(correo.value, contra.value);

  if (correo.value.trim() == "" || contra.value.trim() == "") {
    alert("Todos los campos son obligatorios");
    return;
  }

  if (correo.value.length < 6) {
    alert("El correo es muy corto");
    return;
  }

  if (contra.value.length < 3) {
    alert("La contraseña es muy corta");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value)) {
    alert("El correo no es valido.");
    return;
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: correo.value,
      contrasenia: contra.value,
    }),
  };

  fetch("http://localhost:8080/api/auth/login", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      var correo = response.mensaje;

      // Construir la URL con los parámetros
      var urlDestino =
        "./destino.html" + "?correo=" + encodeURIComponent(correo);

      // Redirigir a la página de destino
      window.location.href = urlDestino;
    })
    .catch((err) => console.error(err));
});
