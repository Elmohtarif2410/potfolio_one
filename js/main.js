// Functionalty of slide to landaing
let landing = document.querySelector(".landing"),
    landingButton = document.querySelectorAll(".landing ul li");

landingButton[0].onclick = function () {
    //add and remove classes for buttons
    landingButton[0].classList.add("active");
    landingButton[1].classList.remove("active");
    landingButton[2].classList.remove("active");
    // change to image
    landing.style.backgroundImage = "url(images/landing-1.jpg)";
}

landingButton[1].onclick = function () {
    //add and remove classes for buttons
    landingButton[1].classList.add("active");
    landingButton[0].classList.remove("active");
    landingButton[2].classList.remove("active");
    // change to image
    landing.style.backgroundImage = "url(images/landing-2.jpg)";
}

landingButton[2].onclick = function () {
    //add and remove classes for buttons
    landingButton[2].classList.add("active");
    landingButton[0].classList.remove("active");
    landingButton[1].classList.remove("active");
    // change to image
    landing.style.backgroundImage = "url(images/landing-3.jpg)";
}


// Functionalty of slide to Testmonials
let quote = document.querySelector(".testmonials blockquote"),
    nameQuote = document.querySelector(".testmonials h3"),
    testmonialsButton = document.querySelectorAll(".testmonials ul li");

testmonialsButton[0].onclick = function () {
    //add and remove classes for buttons
    testmonialsButton[0].classList.add("active");
    testmonialsButton[1].classList.remove("active");
    testmonialsButton[2].classList.remove("active");
    // change to image
    quote.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusamus laborum deserunt, illo reprehenderit repellendus aliquam, dolorum unde mollitia veritatis odio. Exercitationem voluptatibus facilis error atque possimus perferendis.";
    nameQuote.textContent = "name one";
}

testmonialsButton[1].onclick = function () {
    //add and remove classes for buttons
    testmonialsButton[1].classList.add("active");
    testmonialsButton[0].classList.remove("active");
    testmonialsButton[2].classList.remove("active");
    // change to image
    quote.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusamus laborum deserunt, illo reprehenderit repellendus aliquam, dolorum unde mollitia veritatis odio. Exercitationem voluptatibus facilis error atque possimus.";
    nameQuote.textContent = "name Two";
}

testmonialsButton[2].onclick = function () {
    //add and remove classes for buttons
    testmonialsButton[2].classList.add("active");
    testmonialsButton[0].classList.remove("active");
    testmonialsButton[1].classList.remove("active");
    // change to image
    quote.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusamus laborum deserunt, illo reprehenderit repellendus aliquam, dolorum unde mollitia veritatis odio. Exercitationem voluptatibus facilis error atque.";
    nameQuote.textContent = "name three"
}


// functionalty of Anmition
let anmation = document.querySelectorAll(".skills section.progress div span"),
    body = document.querySelector("body");

window.onscroll = function () {
    if (window.scrollY >= 700) {
        topPage.style.opacity = "1";
        topPage.style.display = "block";
    } else {
        topPage.style.opacity = "0";
        topPage.style.display = "none";
    }

    if (body.scrollWidth > 1200) {
        if (window.scrollY >= 1300) {
            anmation[0].style.animation = "progress ease-in-out 1.5s running";
            anmation[1].style.animation = "progress ease-in-out 1.5s running";
            anmation[2].style.animation = "progress ease-in-out 1.5s running";
            anmation[3].style.animation = "progress ease-in-out 1.5s running";
        } 
    } else if (880 < body.scrollWidth < 1200) {
        if (window.scrollY >= 1500) {
            anmation[0].style.animation = "progress ease-in-out 1.5s running";
            anmation[1].style.animation = "progress ease-in-out 1.5s running";
            anmation[2].style.animation = "progress ease-in-out 1.5s running";
            anmation[3].style.animation = "progress ease-in-out 1.5s running";
        } 
    } else if (767 < body.scrollWidth < 880) {
        if (window.scrollY >= 1800) {
            anmation[0].style.animation = "progress ease-in-out 1.5s running";
            anmation[1].style.animation = "progress ease-in-out 1.5s running";
            anmation[2].style.animation = "progress ease-in-out 1.5s running";
            anmation[3].style.animation = "progress ease-in-out 1.5s running";
        }
    } else {
        anmation[0].style.animation = "progress ease-in-out 1.5s running";
        anmation[1].style.animation = "progress ease-in-out 1.5s running";
        anmation[2].style.animation = "progress ease-in-out 1.5s running";
        anmation[3].style.animation = "progress ease-in-out 1.5s running";
    }
};


// Functionalty for onclick buttons
let icon = document.getElementById("icon"),
    buttonScills = document.querySelector(".skills .container section.content button "),
    bottonLearnMore = document.querySelector(".landing .text button"),
    bottonDownloadResume = document.querySelector(".resume button");

icon.onclick = function () {
    icon.classList.toggle("click");
};

topPage.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
}

buttonScills.onclick = function () {
    open("#contact", "_self");
}

bottonLearnMore.onclick = function () {
    open("#about", "_self");
}

bottonDownloadResume.onclick = function () {
    open("");
}


// Functionalty of open method to projects
var project_1 = document.querySelector("#project-1"),
    project_2 = document.querySelector("#project-2"),
    project_3 = document.querySelector("#project-3"),
    project_4 = document.querySelector("#project-4"),
    project_5 = document.querySelector("#project-5"),
    project_6 = document.querySelector("#project-6"),
    project_7 = document.querySelector("#project-7"),
    project_8 = document.querySelector("#project-8"),
    project_9 = document.querySelector("#project-9");

project_1.onclick = function () {
    open("");
};
project_2.onclick = function () {
    open("");
};
project_3.onclick = function () {
    open("");
};
project_4.onclick = function () {
    open("");
};
project_5.onclick = function () {
    open("");
};
project_6.onclick = function () {
    open("");
};
project_7.onclick = function () {
    open("");
};
project_8.onclick = function () {
    open("");
};
project_9.onclick = function () {
    open("");
};