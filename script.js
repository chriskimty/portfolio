//Create portfolio object
const portfolio = {};

// Hamburger Nav slide-out toggle
portfolio.hamNavToggle = () => {
    hamNavToggle = document.querySelector(".hamNavIcon");
    portfolio.hamNav = document.querySelector(".hamNav");
    
    hamNavToggle.addEventListener("click", () => {
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

// Typewriter Function 
portfolio.typeWriter = () => {
    const text = document.querySelector(".secondText");

    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "Musician"
        }, 0);
        setTimeout(() => {
            text.textContent = "Educator"
        }, 3000);
        setTimeout(() => {
            text.textContent = "Learner"
        }, 6000);
    }   
    textLoad();
    setInterval(textLoad, 9000);
}

//init function
portfolio.init = () => {
    portfolio.hamNavToggle();
    portfolio.removeHamNav();
    portfolio.typeWriter();
}

portfolio.init();
