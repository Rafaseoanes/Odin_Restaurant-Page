import "./homeStyle.css";
import headImg from "./assets/Designer 2.jpeg";

const renderHome = function () {
  const content = document.getElementById("content");

  const headLine = document.createElement("h2");
  const burgersDescription = document.createElement("h4");
  const image = document.createElement("img");

  headLine.innerText = "Best burgers in town! Guaranteed.";
  burgersDescription.innerText =
    "Delves into the Joy of Burger Craftsmanship, Inspiring Enthusiasts to Savor the Complex Flavors and Rich Aromas in Every Bite.";
  image.src = headImg;

  // content.innerText = "Rendering home from renderHome!"
  content.append(image, headLine, burgersDescription);
};

export default renderHome;
