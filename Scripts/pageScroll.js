var phase = 0;
var scrollPosition = 0;
var stopScroll = false;
var aboutboxElement = document.getElementById("aboutbox");
var techh1Element = document.getElementById("techh1");
var projectbox1Element = document.getElementById("projectbox1");
var projectbox2Element = document.getElementById("projectbox2");
var projectbox3Element = document.getElementById("projectbox3");
var projectbox4Element = document.getElementById("projectbox4");
var projectbox5Element = document.getElementById("projectbox5");
var projectbox6Element = document.getElementById("projectbox6");
var project1Element = document.getElementById("project1");
var project2Element = document.getElementById("project2");
var project3Element = document.getElementById("project3");
var project4Element = document.getElementById("project4");
var project5Element = document.getElementById("project5");
var project6Element = document.getElementById("project6");

var contactsElement = document.getElementById("contacts");
console.log(project1Element)




window.addEventListener("scroll", function () {
    scrollPosition = window.scrollY;
    decision();
});

function runAbout() {
    aboutElement.style.opacity = 1;
}

function runtech(){
    var techsElement = document.getElementById("tech");
    techsElement.style.opacity = 1;
}

function showPic(picId){
    var picElement = document.getElementById(picId);
    picElement.style.opacity = 1;
}

function revealAll(){
    scrollPosition = 100000;
    decision();
}

function decision(){
    if (scrollPosition > 300 && phase == 0) {
        aboutboxElement.style.opacity = 1;
        aboutboxElement.style.transform = "TranslateX(0px)";
        runAbout();
        phase = 1;
    }
    else if (scrollPosition > 1100 && phase == 1 && !stopScroll){
        techh1Element.style.transform = "TranslateX(0px)";
        techboxElement.style.opacity = 1;
        stopScroll = true;
        for (let i = 0; i < 9; i++) {
            setTimeout(() => {
                console.log(i.toString());
                showPic("pic-"+i.toString());
            }, 100*i);
        }
        setTimeout(() => {
            phase = 2;
        }, 1100);
    }
    ;
}