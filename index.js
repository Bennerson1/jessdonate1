document.getElementById("copyBtn").addEventListener("click", () => {
  const pixKey = document.getElementById("pixKey").textContent;
  navigator.clipboard.writeText(pixKey);

  const msg = document.getElementById("copiedMsg");
  msg.classList.remove("hidden");
  setTimeout(() => msg.classList.add("hidden"), 2000);
});
