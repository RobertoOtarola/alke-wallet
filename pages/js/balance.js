// Inicializar saldo si no existe
if (!localStorage.getItem("balance")) {
  localStorage.setItem("balance", "0");
}

function getBalance() {
  return Number(localStorage.getItem("balance"));
}

function setBalance(newBalance) {
  localStorage.setItem("balance", newBalance.toString());
}

// Mostrar saldo en el menú
document.addEventListener("DOMContentLoaded", () => {
  const balanceEl = document.getElementById("balance");
  if (balanceEl) {
    balanceEl.textContent = getBalance();
  }
});