//! Set title:
document.querySelector("html title").innerText = "Pure JS WebPage";

//! font awesome
const script = document.createElement("script");
script.src = "https://kit.fontawesome.com/5c4607dc13.js";
script.crossorigin = "anonymous";
document.head.appendChild(script);

//! body
document.body.style = "background:#e1e1e1; font-family: arial;";

//! navBar:
const header = document.createElement("header");
document.body.prepend(header);

//! div container
const navDiv = document.createElement("div");
navDiv.style =
  "background: #25115f; display: flex; justify-content: flex-end; border-radius: 10px; padding: 0 2rem";
header.prepend(navDiv);

//! a elements menu
for (let i = 0; i < 3; i++) {
  const menuText = ["Home", "About", "Contact"];
  const a = document.createElement("a");
  a.setAttribute("href", "#");
  a.style =
    "padding: 10px 15px; text-decoration: none; font-size: 1.3rem; color: #fff; transition: all 0.5s ease;";

  a.addEventListener(
    "mouseover",
    () => {
      a.style.background = "orange";
      a.style.color = "#222";
    },
    false
  );
  a.addEventListener(
    "mouseleave",
    () => {
      a.style.background = "";
      a.style.color = "#fff";
    },
    false
  );
  a.innerText = menuText[i];
  navDiv.appendChild(a);
}
// const navLinks = document.querySelectorAll("header div a");
//! main h1 header
const h1 = document.createElement("h1");
h1.innerText = "Welcome To My Website";
h1.style = "text-align: center; margin: 4rem 0; font-size: 3rem;";
header.appendChild(h1);

//! main
const main = document.createElement("main");
main.style =
  "display: grid; grid-template-columns: 2fr 1fr; background: #25115f; height: 100px; align-items: center; justify-items: center; max-width: 1250px; margin: 0 auto; height: 100%; padding: 3rem; border-radius: 10px;";
document.body.appendChild(main);

//! left container
const mainDivLeft = document.createElement("div");
mainDivLeft.style =
  "display: flex; flex-direction: column; align-items: center;";
main.appendChild(mainDivLeft);

//! header
const mainDivHeader = document.createElement("h1");
mainDivHeader.style = "color: orange;";
mainDivHeader.innerText = "Just Another Header";
mainDivLeft.appendChild(mainDivHeader);

//! main paragraph
const p = document.createElement("p");
p.style = "align-text: center; padding: 5px; font-size: 1.2rem; color: #fff;";
p.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate deserunt beatae maiores unde fuga quo ducimus, eligendi dignissimos sapiente totam. Ratione iste modi alias esse quaerat adipisci aliquam optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate deserunt beatae maiores unde fuga quo ducimus, eligendi dignissimos sapiente totam. Ratione iste modi alias esse quaerat adipisci aliquam optio.";
mainDivLeft.appendChild(p);

//! button
const mainBtn = document.createElement("button");
mainBtn.style =
  "color: #25115f; padding: 10px 15px; font-size: 1.1rem; border-radius: 5px; border: none; cursor: pointer; font-weight: bold; margin: 1rem 0;";
mainBtn.innerText = "Go To About";
mainBtn.addEventListener(
  "mouseover",
  () => {
    mainBtn.style.background = "orange";
    mainBtn.style.color = "#fff";
  },
  false
);
mainBtn.addEventListener(
  "mouseleave",
  () => {
    mainBtn.style.background = "#fff";
    mainBtn.style.color = "#25115f";
  },
  false
);
mainDivLeft.appendChild(mainBtn);

//! right side image
const img = document.createElement("img");
img.style = "width: 90%;";
img.src =
  "https://www.thoughtco.com/thmb/_P_IpRezcdFY2uZZNjKtLpyj2zA=/1500x1000/filters:fill(auto,1)/JavaScript-58acbb8a3df78c345bad32c2.jpg";
main.appendChild(img);

//! footer
const footer = document.createElement("footer");
footer.style =
  "background: #999; max-width: 1335px; margin: 12rem auto 0 auto; padding: 0.3rem; border-radius: 10px; display: flex; flex-direction: column; align-items: center;";
document.body.appendChild(footer);

const footerHeader = document.createElement("h2");
footerHeader.innerText = "Social Media";
footer.appendChild(footerHeader);

const iconsContainer = document.createElement("div");
footer.appendChild(iconsContainer);

//! the 3 media icons
for (let i = 0; i < 3; i++) {
  const icons = [
    "fab fa-linkedin",
    "fab fa-instagram",
    "fab fa-facebook-square",
  ];
  const aFooter = document.createElement("a");
  aFooter.style = "margin: 0 10px;";
  aFooter.href = "";
  iconsContainer.appendChild(aFooter);
  const icon = document.createElement("i");
  icon.style =
    "color: #25115f; font-size: 2rem; transition: all 0.3s ease-in-out;";
  icon.classList = icons[i];
  aFooter.appendChild(icon);

  //! hovering effect
  icon.addEventListener(
    "mouseover",
    () => {
      icon.style.transform = "rotate(45deg) scale(1.4)";
      icon.style.color = "orange";
    },
    false
  );
  icon.addEventListener(
    "mouseleave",
    () => {
      icon.style.transform = "";
      icon.style.color = "#25115f";
    },
    false
  );
}
