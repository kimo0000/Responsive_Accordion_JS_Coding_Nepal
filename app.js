const upIcons = document.querySelectorAll(".up");

upIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.classList.toggle("active");
  });
});
