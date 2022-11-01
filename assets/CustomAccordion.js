const accordions = document.querySelectorAll(".accordion");

accordions.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.nextElementSibling.style.display === "block") {
      element.nextElementSibling.style.display = "none";
      element.classList.remove("active");
    } else {
      element.nextElementSibling.style.display = "block";
      element.classList.add("active");
    }
  });
});
