const btn = document.querySelector("#main");
const h = document.querySelectorAll(".hide");
btn.addEventListener("click", () => {
  h.forEach((element) => {
    element.classList.toggle("block");
    element.classList.toggle("hidden");
  });
});
