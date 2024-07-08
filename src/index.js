import "./style.css"
import "./renderHome"
import renderHome from "./renderHome"

const documentLoad = document.querySelector("body")

documentLoad.addEventListener("load", renderHome())