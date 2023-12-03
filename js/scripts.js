Fancybox.bind()

//const container = document.getElementById("myCarousel");
const container = document.querySelector("#myCarousel");
const options = { infinite: false };

new Carousel(container, options);


/* -----------------
    Navigation
-------------------- */

var mainNav = document.querySelector("#mainNav");
var signInUpButton = document.querySelector("#sign-in-up-button");
var burgerBtn = document.querySelector("#burger-container button");

var burgerBars = document.querySelector("#burger-bars");
var burgerX = document.querySelector("#burger-x");

var canYouSeeMainNav = false;


function showNav(){
if(canYouSeeMainNav === false){
    console.log("show menu");
    mainNav.classList.add("showMainNav");

    signInUpButton.classList.add("showSignUp");
    canYouSeeMainNav = true;

    burgerBars.classList.add("hide-burger-bars");

    burgerX.classList.remove("hide-burger-x");

}else{
    console.log("hide menu");
    mainNav.classList.remove("showMainNav");

    signInUpButton.classList.remove("showSignUp");

    burgerBars.classList.remove("hide-burger-bars");

    burgerX.classList.add("hide-burger-x");


    canYouSeeMainNav = false;
}



}
// add a event listener to the button
burgerBtn.addEventListener("click", showNav);


// will call function with the name of showNav
// showNav();

/* -----------------
    Sign-Up
-------------------- */
var signUpBtn = document.querySelector("#sign-up-btn");
var signUpContainer = document.querySelector("#signup-container");
var closeSignUpModalBtn = document.querySelector("#close-sign-up-modal-btn");

function showSignUpModal(){
    signUpContainer.classList.add("show-signUp-container");
    // hide the navigation on close
    mainNav.classList.remove("showMainNav");
    // hide the sign in/up buttons
    signInUpButton.classList.remove("showSignUp");
}

function hideSignUpModal(){
    signUpContainer.classList.remove("show-signUp-container");
}

signUpBtn.addEventListener("click", showSignUpModal);
closeSignUpModalBtn.addEventListener("click", hideSignUpModal);