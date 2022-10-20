//Create portfolio object
const portfolio = {};


// Hamburger Nav slide-out toggle
portfolio.hamNavToggle = () => {
    const hamNavToggle = document.querySelector(".hamNavIcon");
    const hamNav = document.querySelector(".hamNav");

    hamNavToggle.addEventListener("click", () => {
        hamNav.classList.toggle("openNav"); 
    })
    // need to add logic where if I click on any of the links, then the whole hamNav closes
}

//init function
portfolio.init = () => {
    portfolio.hamNavToggle();
}

portfolio.init();
