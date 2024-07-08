import "./style.css"
import "./renderHome"
import renderHome from "./renderHome"
import renderMenu  from "./renderMenu"

const documentLoad = document.querySelector("body")
const content = document.getElementById("content")

const homeBtn = document.getElementById("homeBtn")
const menuBtn = document.getElementById("menuBtn")
const aboutBtn = document.getElementById("aboutBtn")


const cleanUi = function(){
  
content.innerHTML = ""

}

documentLoad.addEventListener("load", renderHome())