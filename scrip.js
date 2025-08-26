   // Simpleinteractivity example
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert(`Seleccionaste: ${card.querySelector("h3").textContent}`);
  });
});
