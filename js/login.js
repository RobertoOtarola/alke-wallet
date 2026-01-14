document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Por favor, complete todos los campos");
      return;
    }

    // Login simulado
    localStorage.setItem("user", email);

    window.location.href = "menu.html";
  });
});
