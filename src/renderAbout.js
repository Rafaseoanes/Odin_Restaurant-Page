
const contactInfo = [ "📍 Address: 123 Burger Lane, Food City ",  
    "📞 Phone: (123) 456-7890  ",
     "📧 Email: info@burgerhaven.com"  ]

const renderAbout = function () {
  const content = document.getElementById("content");

  const aboutUsTitle = document.createElement("h2");
  const aboutUs = document.createElement("h3");
  const contactUs = document.createElement("h3");
  const contactList = document.createElement("ul")

  aboutUsTitle.innerText = "About Us:";

  aboutUs.innerText =
    "  Welcome to Burger Haven, your go-to spot for delicious, gourmet burgers made with the finest ingredients. Located in the heart of the city, we offer a range of burgers to satisfy every taste.  Our menu features the classic Classic burger with fresh lettuce, tomato, and cheese, the smoky BBQ burger with crispy onions, the rich Mushroom burger with sautéed mushrooms and Swiss cheese, the bold Spicy burger with jalapeños and pepper jack cheese, the wholesome Veggie burger with fresh greens and avocado, and the indulgent Bacon burger with crispy bacon and melted cheddar.  At Burger Haven, we pride ourselves on providing a warm and welcoming atmosphere for friends and families to enjoy great meals together.";
  contactUs.innerText =
    "Join us at Burger Haven and experience the joy of exceptional burgers. We can't wait to serve you!";

   for(let i = 0; i < 3; i++){
    const listEl = document.createElement("li")
    listEl.innerText = contactInfo[i]

    contactList.append(listEl)

   }
  
  aboutUs.style.width = "800px";
  contactUs.style.width = "800px";
  contactList.style.width = "800px";
  content.append(aboutUsTitle, aboutUs, contactList, contactUs, );
};

export default renderAbout;
