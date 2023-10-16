// arrays
const favBooks =[]
const filterWriter =[]
const filterLang =[]
const filterGenre =[]


// dom nodes
let library = document.querySelector(".mainSection__library");
let basket = document.querySelector(".header__basketIcon");
let filter = document.querySelector(".mainSection__filter");
let counter = document.querySelector(".header__basketIcon--number");


let storedBasket = localStorage.getItem("myBasket");
