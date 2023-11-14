// alert("Hello Class");

var mainNav = document.querySelector("#mainNav");

var burgerBtn = document.querySelector("#burger-container button")
console.log(burgerBtn);
// console.log(mainNav);
var canYouSeeMainNav = false;

// console.log("Hello Class!");

function showNav(){
console.log("button clicked");
if(canYouSeeMainNav === false){
    mainNav.classList.add("showMainNav");
    canYouSeeMainNav = true;
}else{
    mainNav.classList.remove("showMainNav");
    canYouSeeMainNav = false;
}


}
// add a event listener to the button
burgerBtn.addEventListener("click", showNav);
