// alert("Hello Class");

var mainNav = document.querySelector("#mainNav");

var burgerBtn = document.querySelector("#burger-container button")
console.log(burgerBtn);
// console.log(mainNav);



// console.log("Hello Class!");

function showNav(){
console.log("button clicked");
mainNav.classList.add("showMainNav");

// add a event listener to the button
burgerBtn.addEventListener("click", showNav);
}
// will call function with the name of showNav
// showNav();