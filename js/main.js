(function() {
  const header = document.querySelector("header");
  const menu = document.querySelector(".header__hamburger");
  const nav = document.querySelector(".nav");
  const nav__overlay = document.querySelector(".nav__overlay");

  const stickyHeader = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      header.className = "header sticky";
    } else {
      header.className = "header";
    }
  };

  const toggleMenu = () => {
    if (menu.className === "header__hamburger") {
      menu.className = "header__hamburger header__hamburger--show";
      nav.className = "nav nav--show";
      nav__overlay.className = "nav__overlay nav__overlay--show";
    } else {
      menu.className = "header__hamburger";
      nav.className = "nav";
      nav__overlay.className = "nav__overlay";
    }
  };

  menu.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", stickyHeader);
})();
