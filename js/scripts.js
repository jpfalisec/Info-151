var mainNav = document.querySelector("mainNav");

var burgerBtn = document.querySelector("#burger-container button");
console.log(burgerBtn);

var canYouSeeMainNav = false;


function showNav(){
    console.log("button clicked");

    if(canYouSeeMainNav === false){
        mainNav.classList.add("showMainNav");
    }else{
        mainNav.classList.remove("showMainNav");
        canYouSeeMainNav = false;
    }
}

burgerBtn.addEventListener("click", showNav);