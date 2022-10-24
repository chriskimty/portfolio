//Create portfolio object
const portfolio = {};

// Hamburger Nav Function
portfolio.hamNavToggle = () => {
    // Hamburger nav slide-out toggle
    hamNavToggle = document.querySelector(".hamNavIcon");
    portfolio.hamNav = document.querySelector(".hamNav");
    
    hamNavToggle.addEventListener("click", () => {
        portfolio.hamNav.classList.toggle("openNav");
    });
    // Remove Hamburger Nav from view once links are clicked
    const hamLinks = document.querySelectorAll(".hamLinks");

    hamLinks.forEach(hamLinks => {
        hamLinks.addEventListener('click', () => portfolio.hamNav.classList.remove("openNav"))
    });
};

// Typewriter Function 
portfolio.typeWriter = () => {
    const text = document.querySelector(".secondText");
    
    const textAnimation = () => {
        setTimeout(() => {
            text.textContent = "Musician"
        }, 0);
        setTimeout(() => {
            text.textContent = "Educator"
        }, 3000);
        setTimeout(() => {
            text.textContent = "Creator"
        }, 6000);
        setTimeout(() => {
            text.textContent = "Learner"
        }, 9000);
        setTimeout(() => {
            text.textContent = "Cat-Mom"
        }, 12000);
    }
    textAnimation();
    setInterval(textAnimation, 15000);
    // changed from 15000, but technically, not sure why the logic is flawed since the entire function re-runs every 15 seconds... 
};

//Contact Form - Prevent Default Behavior
portfolio.formSubmission = () => {
    const form = document.getElementById("myForm");
    const input = document.querySelectorAll(".input");
    async function handleSubmit(event) {
        event.preventDefault();
        input.textContent = "";
        const status = document.getElementById("myFormStatus");
        const data = new FormData(event.target);

        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Thank you for your message!";
                status.classList.add("success")
                form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.innerHTML = "Oops! There was a problem. Please try again."
                        status.classList.add("error")
                    }
                })
            }
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem. Please try again."
            status.classList.add("error")
        });
    }
    form.addEventListener("submit", handleSubmit)
};

//Toggle nightmode and daymode
portfolio.nightMode = () => {
    const icon = document.getElementById("icon");
    const body = document.querySelector("body");
    const img = document.querySelector(".catImg")
    icon.onclick = () => {
        body.classList.toggle("nightMode");
        console.log("🐈🐈🐈")
        if (document.body.classList.contains("nightMode")){
            icon.src = "assets/dayIcon.png"
            img.src = "assets/orangeRun.gif"
        } else {
            icon.src = "assets/nightIcon.png"
            img.src = "assets/orangeSleep.gif"
        }
    }
}

//init function
portfolio.init = () => {
    portfolio.hamNavToggle();
    portfolio.typeWriter();
    portfolio.formSubmission();
    portfolio.nightMode();
}

portfolio.init();
