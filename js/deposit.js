document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const amountInput = document.getElementById("amount");
    const amount = Number(amountInput.value);

    if (!amount || amount <= 0) {
      alert("Ingrese un monto válido");
      return;
    }

    const currentBalance = Number(localStorage.getItem("balance")) || 0;
    const newBalance = currentBalance + amount;

    localStorage.setItem("balance", newBalance);

    const transactions =
      JSON.parse(localStorage.getItem("transactions")) || [];

    transactions.push({
      type: "Depósito",
      amount,
      date: new Date().toLocaleString(),
    });

    localStorage.setItem("transactions", JSON.stringify(transactions));

    alert("Depósito realizado con éxito");
    amountInput.value = "";
  });
});
