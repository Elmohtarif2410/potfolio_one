/****************************************************************************
********************* Functionalty of slide to landaing *********************
****************************************************************************/
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

/************* looping clicked to buttons => 5 secound ************/
// action funcution after window on load becouse image loaded in page
window.onload = function () {

    setTimeout(function () {
        // click to button two after window on load in 5 secound
        landingButton[1].click();
        setInterval(function () {
            // click to button two every 15 seconds
            landingButton[1].click()
        }, 15000)
    }, 5000);
    
    setTimeout(function () {
        // click to button three after window on load in 10 secound
        landingButton[2].click();
        setInterval(function () {
            // click to button three every 15 seconds
            landingButton[2].click()
        }, 15000)
    }, 10000);
    
    setTimeout(function () {
        // click to button three after window on load in 15 secound
        landingButton[0].click();
        setInterval(function () {
            // click to button one every 15 seconds
            landingButton[0].click()
        }, 15000)
    }, 15000);
}


/****************************************************************************
********************* Functionalty of slide to Testmonials ******************
****************************************************************************/
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


/****************************************************************************
************************** functionalty of Anmition *************************
****************************************************************************/
let anmation = document.querySelectorAll(".skills section.progress div span"),
    body = document.querySelector("body");

window.onscroll = function () {
    // function button scroll top page
    if (window.scrollY >= 700) {
        topPage.style.opacity = "1";
        topPage.style.display = "block";
    } else {
        topPage.style.opacity = "0";
        topPage.style.display = "none";
    }

    // Anmiation to Skills section
    if (body.scrollWidth > 1200) {
        console.log("test")
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


/****************************************************************************
********************* Functionalty for onclick buttons **********************
****************************************************************************/
let icon = document.getElementById("icon"),
    logo = document.querySelector("header .logo"),
    buttonScills = document.querySelector(".skills .container section.content button "),
    bottonLearnMore = document.querySelector(".landing .text button"),
    bottonDownloadResume = document.querySelector(".resume button"),
    portfolioButtonMore = document.querySelector(".portfolio button");

icon.onclick = function () {
    icon.classList.toggle("click");
};

logo.onclick = function () {
    open("#home", "_self");
};

topPage.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
}

// send to Arbic page
languge.onclick = function () {
    open("arbic.html", "_self")
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

portfolioButtonMore.onclick = function () {
    if (this.textContent === "more") {
        document.querySelector(".portfolio .projects").style.maxHeight = "unset";
        this.textContent = "less";
    } else {
        document.querySelector(".portfolio .projects").style.maxHeight = "750px";
        this.textContent = "more";
    }
}

/****************************************************************************
********************* functionalty Buttons Action Page **********************
*(************************* functionalty portflio ***************************
****************************************************************************/
// functionalty portflio category
let category = document.querySelectorAll(".portfolio ul li"),
    projectCategory = document.querySelectorAll(".portfolio .projects section .text span");

for (c = 1; c < category.length; c++) {
    category[c].onclick = function () {
        //remove class active of category
        for (i = 0; i < category.length; i++) {
            category[i].classList.remove("active");
        }
        // add class active for this category
        this.classList.add("active");

        // restet section projets
        for (p = 0; p < projectCategory.length; p++) {
            projectCategory[p].parentElement.parentElement.style.display = "block";
        }
    
        // shfile projects
        categoryName = this.textContent; // varible to content this category
        // loop delete section projects when click this category
        for (i = 0; i < projectCategory.length; i++) {
            projectCategoryName = projectCategory[i].textContent;
            if (!projectCategoryName.includes(categoryName)) {
                projectCategory[i].parentElement.parentElement.style.display = "none";
            }
        }
    }
}    
// function to click All projects
category[0].onclick = function () {
    // restet section projets
    for (p = 0; p < projectCategory.length; p++) {
        projectCategory[p].parentElement.parentElement.style.display = "block";
    }
    // remove class active of category
    for (i = 0; i < category.length; i++) {
        category[i].classList.remove("active");
    }
    // add class active for this category
    this.classList.add("active");
}

/****************************************************************************
****************** Functionalty of open method to projects ******************
****************************************************************************/
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
project_10.onclick = function () {
    open("");
};
project_11.onclick = function () {
    open("");
};
project_12.onclick = function () {
    open("");
};