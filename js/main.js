// Initialize AOS
AOS.init({
  duration: 800,
  easing: "slide",
});
// Parallax scrolling (stellar.js equivalent in vanilla JS)
window.addEventListener("scroll", function () {
  const parallaxElements = document.querySelectorAll(
    "[data-stellar-background-ratio]"
  );
  parallaxElements.forEach((element) => {
    const ratio = parseFloat(
      element.getAttribute("data-stellar-background-ratio")
    );
    const offset = window.scrollY * ratio;
    element.style.backgroundPosition = `center ${offset}px`;
  });
});
function setFullHeight() {
  const fullHeightElements = document.querySelectorAll(".js-fullheight");
  fullHeightElements.forEach((element) => {
    element.style.height = `${window.innerHeight}px`;
  });
}
window.addEventListener("resize", setFullHeight);
setFullHeight();
// Loader functionality
function hideLoader() {
  const loader = document.getElementById("ftco-loader");
  if (loader) {
    setTimeout(() => loader.classList.remove("show"), 1);
  }
}
hideLoader();
// Burger menu functionality
function initBurgerMenu() {
  document.body.addEventListener("click", function (event) {
    if (event.target.matches(".js-fh5co-nav-toggle")) {
      event.preventDefault();
      const nav = document.getElementById("ftco-nav");
      if (nav.style.display === "block") {
        event.target.classList.remove("active");
        nav.style.display = "none";
      } else {
        event.target.classList.add("active");
        nav.style.display = "block";
      }
    }
  });
}
initBurgerMenu();
// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.addEventListener("click", function (event) {
    if (event.target.matches('#ftco-nav a[href^="#"]')) {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    }
  });
}
initSmoothScrolling();
// Carousel functionality (using OwlCarousel settings with vanilla JS if a replacement is needed)
function initCarousel() {
  const sliders = document.querySelectorAll(".home-slider");
  sliders.forEach((slider) => {
    let currentIndex = 0;
    const items = slider.children;
    const totalItems = items.length;
    function showSlide(index) {
      for (let i = 0; i < totalItems; i++) {
        items[i].classList.remove("active");
      }
      items[index].classList.add("active");
    }
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      showSlide(currentIndex);
    }
    setInterval(nextSlide, 3000); // Adjust autoplay timing
  });
}
initCarousel();
// Dropdown hover functionality
function initDropdownHover() {
  const dropdowns = document.querySelectorAll("nav .dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", function () {
      this.classList.add("show");
      const link = this.querySelector("> a");
      if (link) link.setAttribute("aria-expanded", "true");
      const menu = this.querySelector(".dropdown-menu");
      if (menu) menu.classList.add("show");
    });
    dropdown.addEventListener("mouseleave", function () {
      this.classList.remove("show");
      const link = this.querySelector("> a");
      if (link) link.setAttribute("aria-expanded", "false");
      const menu = this.querySelector(".dropdown-menu");
      if (menu) menu.classList.remove("show");
    });
  });
}
initDropdownHover();
// Navbar scroll behavior
function handleNavbarScroll() {
  const navbar = document.querySelector(".ftco_navbar");
  const scrollWrap = document.querySelector(".js-scroll-wrap");
  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    if (scrollTop > 150) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled", "sleep");
    }
    if (scrollTop > 350) {
      navbar.classList.add("awake");
      if (scrollWrap) scrollWrap.classList.add("sleep");
    } else {
      navbar.classList.remove("awake");
      navbar.classList.add("sleep");
      if (scrollWrap) scrollWrap.classList.remove("sleep");
    }
  });
}
handleNavbarScroll();
// Counter animation
function initCounter() {
  const counters = document.querySelectorAll(".number");
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-number");
      const count = +counter.innerText;
      const increment = target / 200;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}
initCounter();
// Content animation on scroll
function initContentWayPoint() {
  const animatedElements = document.querySelectorAll(".ftco-animate");
  animatedElements.forEach((el, index) => {
    const waypointOffset = window.innerHeight * 0.95;
    window.addEventListener("scroll", function () {
      const rect = el.getBoundingClientRect();
      if (
        rect.top < waypointOffset &&
        !el.classList.contains("ftco-animated")
      ) {
        setTimeout(() => {
          const effect = el.getAttribute("data-animate-effect");
          el.classList.add(effect ? effect : "fadeInUp", "ftco-animated");
        }, index * 50);
      }
    });
  });
}
initContentWayPoint();
// Magnific popup functionality
function initMagnificPopup() {
  const imagePopups = document.querySelectorAll(".image-popup");
  imagePopups.forEach((popup) => {
    popup.addEventListener("click", function (event) {
      event.preventDefault();
      const imageUrl = popup.getAttribute("href");
      const img = new Image();
      img.src = imageUrl;
      const popupContainer = document.createElement("div");
      popupContainer.className = "mfp-container";
      popupContainer.appendChild(img);
      document.body.appendChild(popupContainer);
      popupContainer.addEventListener("click", function () {
        document.body.removeChild(popupContainer);
      });
    });
  });
}
initMagnificPopup();
// Loader fade-out
window.addEventListener("load", function () {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  if (loaderWrapper) {
    setTimeout(() => {
      loaderWrapper.classList.add("fade-out");
      setTimeout(() => {
        loaderWrapper.style.display = "none";
      }, 50);
    }, 10);
  }
});
window.addEventListener("load", function () {
  // Wait until the window is fully loaded
  setTimeout(function () {
    // Scroll down by 2px after the page has loaded
    window.scrollBy(0, 2);
  }, 10); // Delay to ensure it's after load
});
