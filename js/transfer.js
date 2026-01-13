document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const recipient = document.getElementById("recipient").value.trim();
    const amount = Number(document.getElementById("amount").value);

    if (!recipient) {
      alert("Debe ingresar un destinatario");
      return;
    }

    if (amount <= 0) {
      alert("Ingrese un monto válido");
      return;
    }

    const currentBalance = Number(localStorage.getItem("balance")) || 0;

    if (amount > currentBalance) {
      alert("Saldo insuficiente");
      return;
    }

    // Actualizar saldo
    const newBalance = currentBalance - amount;
    localStorage.setItem("balance", newBalance.toString());

    // Registrar transacción
    const transactions =
      JSON.parse(localStorage.getItem("transactions")) || [];

    transactions.push({
      type: "Transferencia",
      recipient,
      amount,
      date: new Date().toLocaleString()
    });

    localStorage.setItem("transactions", JSON.stringify(transactions));

    window.location.href = "menu.html";
  });
});
