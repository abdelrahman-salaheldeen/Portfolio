var burgarButton = document.querySelector(".burgar-btn"),
    menu = document.querySelector(".menu"),
    body = document.querySelector("body"),
    container = document.querySelector(".container"),
    portfolioPhoto = document.querySelector(".portfolio-img"),
    portfolioButtons = document.querySelectorAll(".pro-photo"),
    backgroundColors = document.querySelectorAll(".background-color-js"),
    blogPhotos = document.querySelectorAll(".blog-photo-js"),
    coverPhoto = document.querySelector(".cover-photo-js"),
    skills = document.querySelectorAll(".skills-js");

var menuSlider = () => {
    menu.classList.toggle("burgar-active")
    container.classList.toggle("none")
    if(menu.classList.contains("burgar-active")){
        burgarButton.classList.remove("fa-align-left")
        burgarButton.classList.add("fa-arrow-right")
    }else{
        burgarButton.classList.remove("fa-arrow-right")
        burgarButton.classList.add("fa-align-left")
    }
}

var blogAction = () => {
        if(window.scrollY >= (blogPhotos[0].offsetTop + (blogPhotos[0].offsetHeight / 2)) - window.innerHeight){
            blogPhotos[0].style.transform = "translateX(0)";
            blogPhotos[0].style.opacity = "1";
            blogPhotos[0].style.transition = "1s linear";
            blogPhotos[1].style.transform = "translateX(0)";
            blogPhotos[1].style.opacity = "1";
            blogPhotos[1].style.transition = "1s linear";
        }else{
            blogPhotos[0].style.transform = "translateX(-200%)";
            blogPhotos[0].style.opacity = "0";
            blogPhotos[0].style.transition = "1s linear";
            blogPhotos[1].style.transform = "translateX(200%)";
            blogPhotos[1].style.opacity = "0";
            blogPhotos[1].style.transition = "1s linear";
        }
}

var coverAction = () => {
    if(window.scrollY >= (coverPhoto.offsetTop + (coverPhoto.offsetHeight / 2)) - window.innerHeight){
        coverPhoto.style.opacity = "1";
        coverPhoto.style.transition = ".5s linear";
    }
    else{
        coverPhoto.style.opacity = "0";
        coverPhoto.style.transition = ".5s linear";
    }
}

var skillAction = () => {
    skills.forEach(skill => {
        if(window.scrollY >= (skill.offsetTop + (skill.offsetHeight / 2)) - window.innerHeight){
            skill.style.transition = ".5s linear";
            skill.style.opacity = "1"
        }else{
            skill.style.transition = ".5s linear";
            skill.style.opacity = "0"
        }
    });
}


var changeBackgroundColor = (x) => {
    document.documentElement.style.setProperty("--color" , `${x.getAttribute("data-color")}`)
    menuSlider()
}

var changePortfolioImge = (y) => {
    portfolioPhoto.style.backgroundImage = `${y.getAttribute("data-url")}`
    portfolioPhoto.style.transition = "1s linear"
}

burgarButton.addEventListener("click" , menuSlider);
window.addEventListener("scroll" , blogAction);
window.addEventListener("scroll" , coverAction);
window.addEventListener("scroll" , skillAction);
backgroundColors.forEach(color => {
    color.addEventListener("click" , function(){
        changeBackgroundColor(color)
    })
})
portfolioButtons.forEach(portfolioBtn => {
    portfolioBtn.addEventListener("click" , function(){
        changePortfolioImge(portfolioBtn)
    });
})