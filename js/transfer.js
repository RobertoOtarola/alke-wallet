$(function () {
  const recipients = [
    "Juan Pérez",
    "María González",
    "Pedro Sánchez",
    "Ana López",
    "Carlos Torres"
  ];

  $("#recipient").autocomplete({
    source: recipients
  });

  const form = $("form");

  form.on("submit", function (event) {
    event.preventDefault();

    const recipient = $("#recipient").val().trim();
    const amount = Number($("#amount").val());

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

    const newBalance = currentBalance - amount;
    localStorage.setItem("balance", newBalance.toString());

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
