var images = ["Images/HosefPfp.png", "Images/JosephPfp2.png"];
var names = ["Hosef", "Joseph Tan"];
var index = 0;
var intervalId;

function changeImage() {
    var imgElement = document.getElementById("profile-img");
    var nameElement = document.getElementById("name");
    imgElement.style.transform = "translateX(-130%)";
    nameElement.style.transform = "translateX(130%)";

    setTimeout(function () {
        imgElement.src = images[index];
        nameElement.textContent = names[index];
        index = (index + 1) % images.length;
        nameElement.style.transform = "translateX(0)";
        imgElement.style.transform = "translateX(0)";
    }, 2000);
}

setTimeout(function () {
    changeImage();
}, 1000);

intervalId = setInterval(changeImage, 8000);
