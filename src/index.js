import "./style.css";
import "./renderHome";
import renderHome from "./renderHome";
import renderMenu from "./renderMenu";
import renderAbout from "./renderAbout";


const content = document.getElementById("content");

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");

export default function cleanUi() {
  content.innerHTML = "";
};

renderHome();
// renderMenu();
// renderAbout();

homeBtn.addEventListener("click", function () {
  cleanUi();
  renderHome();
});

menuBtn.addEventListener("click", function () {
  cleanUi();
  renderMenu();
});

aboutBtn.addEventListener("click", function () {
  cleanUi();
  renderAbout();
});
