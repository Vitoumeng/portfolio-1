// Alert Fake Notification
window.alert('Noted: Fake Information!!!')

// Toggle nav-menu
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");

const toggleMenu = (navBtn, navMenu) => {
  navBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
};

toggleMenu(navToggle, navMenu);
toggleMenu(navClose, navMenu);

// Close nav-menu for Mobile
const links = document.querySelectorAll(".nav__link");

const menuMobile = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
  console.log("Click");
};

links.forEach((n) => n.addEventListener("click", menuMobile));

// Show header Background
const showHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", showHeader);

// Scroll active-link by every section
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// Scrollup
const showScrollup = () => {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY >= 650
    ? scrollup.classList.add("show-scrollup")
    : scrollup.classList.remove("show-scrollup");
};

window.addEventListener("scroll", showScrollup);
