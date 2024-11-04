document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMobile = document.querySelector(".nav-buttons-mobile");
  const mainContent = document.querySelector("main");
  const navButtons = navMobile.querySelectorAll(".nav-btn");
  hamburger.addEventListener("click", toggleMobileNav);
  mainContent.addEventListener("click", closeMobileNav);
  navButtons.forEach((button) => {
    button.addEventListener("click", closeMobileNav);
  });
  function toggleMobileNav() {
    navMobile.classList.toggle("hidden-nav");
    toggleHamburgerIcon();
  }
  function closeMobileNav() {
    if (!navMobile.classList.contains("hidden-nav")) {
      navMobile.classList.add("hidden-nav");
      resetHamburgerIcon();
    }
  }
  function toggleHamburgerIcon() {
    const spans = hamburger.querySelectorAll("span");
    spans.forEach((span, index) => {
      span.classList.toggle(`close-${index + 1}`);
    });
  }
  function resetHamburgerIcon() {
    const spans = hamburger.querySelectorAll("span");
    spans.forEach((span, index) => {
      span.classList.remove(`close-${index + 1}`);
    });
  }
  navButtons.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
