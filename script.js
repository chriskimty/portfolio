//Create portfolio object
const portfolio = {};


// Hamburger Nav slide-out toggle
portfolio.hamNavToggle = () => {
    portfolio.hamNavToggle = document.querySelector(".hamNavIcon");
    portfolio.hamNav = document.querySelector(".hamNav");
    
    portfolio.hamNavToggle.addEventListener("click", () => {
        portfolio.hamNav.classList.toggle("openNav");
    });
};

// Remove Hamburger Nav from view once links are clicked
portfolio.removeHamNav = () => {
    const hamLinks = document.querySelectorAll(".hamLinks");

    hamLinks.forEach(hamLinks => {
        hamLinks.addEventListener('click', () => portfolio.hamNav.classList.remove("openNav"))
    });
};


//init function
portfolio.init = () => {
    portfolio.hamNavToggle();
    portfolio.removeHamNav();
}

portfolio.init();
