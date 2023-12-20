const nav = document.querySelector("header");

let previousScrollTop;
let isScrolling;

const hasScrolled = () => {
  const scrollTop = window.scrollY;

  if (scrollTop > previousScrollTop) {
    nav.classList.add("header--up");
  } else {
    nav.classList.remove("header--up");
  }

  previousScrollTop = scrollTop;
};

document.addEventListener("scroll", () => (isScrolling = true));

setInterval(() => {
  if (isScrolling) {
    hasScrolled();
    isScrolling = false;
  }
}, 100);
