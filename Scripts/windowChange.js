var techElement = document.getElementById("tech");

var techWidth = techElement.clientWidth;
techElement.style.height = techWidth.toString() +"px";
var imageSize = techWidth * 0.3;

var oneElement = document.getElementById("one");
var aboutElement = document.getElementById("about");

var aboutHeight = aboutElement.clientHeight;
oneElement.style.height = aboutHeight;



var techboxElement = document.getElementById("techbox");
var techh1Element = document.getElementById("techh1");

techboxElement.style.height = techWidth.toString()+"px";

const elements = document.querySelectorAll(".tech .imgcon");

// Loop through the elements and change their width
for (let i = 0; i < elements.length; i++) {
elements[i].style.width = imageSize.toString() + "px";
elements[i].style.height = imageSize.toString() + "px";
}

// Add an event listener for the resize event
window.addEventListener("resize", function() {
    // Get the new width and height of the window
    var width = window.innerWidth;
    var height = window.innerHeight;
    
    var techElement = document.getElementById("tech");

    var aboutHeight = aboutElement.clientHeight;
    oneElement.style.height = aboutHeight;

    var techWidth = techElement.clientWidth;
    techElement.style.height = techWidth.toString() +"px";
    var imageSize = techWidth * 0.3;

    techboxElement.style.height = techWidth.toString()+"px";

    const elements = document.querySelectorAll(".tech .imgcon");

    // Loop through the elements and change their width
    for (let i = 0; i < elements.length; i++) {
    elements[i].style.width = imageSize.toString() + "px";
    elements[i].style.height = imageSize.toString() + "px";
    }
  });