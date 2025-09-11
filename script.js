const toggle = document.getElementById("darkToggle");
toggle?.addEventListener("click", () => {
  document.body.classList.toggle("bg-gray-900");
  document.body.classList.toggle("text-white");
  document.body.classList.toggle("bg-gray-100");
  document.body.classList.toggle("text-gray-900");
});
