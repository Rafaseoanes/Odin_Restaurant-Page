import "./menuStyle.css";
import menuImg1 from "./assets/menu_img_option1.jpeg";
import menuImg2 from "./assets/menu_img_option2.jpeg";
import menuImg3 from "./assets/menu_img_option3.jpeg";
import menuImg4 from "./assets/menu_img_option4.jpeg";
import menuImg5 from "./assets/menu_img_option5.jpeg";
import menuImg6 from "./assets/menu_img_option6.jpeg";

const menuImages = [menuImg1, menuImg2, menuImg3, menuImg4, menuImg5, menuImg6];
const bTitles = ['Classic', 'BBQ', 'Mushroom', 'Spicy', 'Veggie', 'Bacon'];
const burgerDescriptions = [
    "Traditional beef burger with lettuce, tomato, and cheese.",
    "Beef burger with smoky BBQ sauce and crispy onions.",
    "Juicy beef burger topped with sautéed mushrooms and Swiss cheese.",
    "Spicy beef burger with jalapeños and pepper jack cheese.",
    "Delicious veggie patty with fresh greens and avocado.",
    "Beef burger loaded with crispy bacon and cheddar cheese."
  ];
  

const renderMenu = function () {
  const content = document.getElementById("content");
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");

  const containerTitle = document.createElement("h3");
  containerTitle.innerText = "Our burgers:";

  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    const menuImg = document.createElement("img");
    menuImg.classList.add("menuImg");

    menuImg.src = menuImages[i];

    const burgerTitle = document.createElement("h3");
    burgerTitle.innerText = bTitles[i];

    const burgerDescription = document.createElement("p");
    burgerDescription.innerText = burgerDescriptions[i];
    // card.append(`menuImg${i}`)

    card.classList.add("card");
    card.append(menuImg, burgerTitle, burgerDescription);
    cardContainer.append(card);
  }

  content.append(containerTitle, cardContainer);

  // content.innerText = "rendering from renderMenu"
};

export default renderMenu;
