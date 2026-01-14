document.addEventListener("DOMContentLoaded", () => {
  const transactionsList = document.getElementById("transactions-list");

  if (!transactionsList) return;

  const transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

  if (transactions.length === 0) {
    transactionsList.innerHTML =
      "<li>No hay transacciones registradas</li>";
    return;
  }

  transactionsList.innerHTML = "";

  transactions.forEach((transaction) => {
    const li = document.createElement("li");
    li.textContent = `${transaction.date} - ${transaction.type}: $${transaction.amount}`;
    transactionsList.appendChild(li);
  });
});
