
document.addEventListener("DOMContentLoaded", () => {

  // 1. Mobile navigation menu
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "×" : "☰";
    });
  }

  // 2. Gallery category filters
  const filters = document.querySelectorAll(".filter-button");
  const cards = document.querySelectorAll(".project-card");

  filters.forEach((button) => {
    button.addEventListener("click", () => {

      // Update active filter button
      filters.forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      // Get selected category
      const selected = button.dataset.filter;

      // Show or hide project cards
      cards.forEach((card) => {
        const matches =
          selected === "all" ||
          card.dataset.category === selected;

        card.classList.toggle("hidden", !matches);
      });

    });
  });

});
