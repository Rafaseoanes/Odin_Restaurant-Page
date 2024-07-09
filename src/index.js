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
homeBtn.style.color = "#f69610"
// renderMenu();
// renderAbout();

homeBtn.addEventListener("click", function () {
  cleanUi();
  renderHome();
  menuBtn.style.color = "#707070"
  homeBtn.style.color = "#f69610"
  aboutBtn.style.color = "#707070"
});

menuBtn.addEventListener("click", function () {
  cleanUi();
  renderMenu();
  menuBtn.style.color = "#f69610"
  homeBtn.style.color = "#707070"
  aboutBtn.style.color = "#707070"
});

aboutBtn.addEventListener("click", function () {
  cleanUi();
  renderAbout();
  menuBtn.style.color = "#707070"
  homeBtn.style.color = "#707070"
  aboutBtn.style.color = "#f69610"
});
