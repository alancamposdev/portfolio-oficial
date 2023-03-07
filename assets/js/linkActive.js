// link ativo

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".header__link");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let heigth = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + heigth) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".header__link[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};


//sticky navbar adicinando uma borda embaixo do header.
let header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY > 100);