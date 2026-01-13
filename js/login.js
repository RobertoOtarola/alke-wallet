document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Credenciales simuladas
    if (email === "user@alkewallet.com" && password === "123456") {
      window.location.href = "menu.html";
    } else {
      alert("Credenciales incorrectas");
    }
  });
});