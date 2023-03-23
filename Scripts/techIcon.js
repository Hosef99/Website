var iconArray = [];
var containerArray = [];
var flexTechContainer = document.getElementById("tech");
var descPElement = document.getElementById("descP");
var descriptionArray = ["I learned HTML in 2018 and have worked on numerous web development projects since then. While I would consider myself at an intermediate level, I am always looking to expand my knowledge and learn new techniques to create dynamic and engaging web pages.", "After learning the basics of CSS in 2018, I recently delved deeper into its many features and capabilities. Though I am still honing my skills, I enjoy experimenting with different styles and layouts to create visually appealing and responsive websites.", "I have been familiar with JavaScript since 2014, but it wasn't until 2021 that I began using it alongside HTML and CSS in various projects. As a result, I have become fluent in the language and enjoy using it to create interactive web experiences.", "As a musician, producing music has been a hobby of mine since 2019, and I have used FL Studio 20 to create countless tracks for game development and other occasions. With my advanced level of experience, I am able to manipulate and refine audio to create polished and professional-sounding compositions.", "Since beginning to learn Unity in 2021, I have used it to create multiple games over the past few years. With my advanced level of experience, I am able to navigate the platform with ease and utilize its many features to develop engaging and immersive gaming experiences.", "In tandem with my learning of Unity, I began to learn C# in 2021, as it is the default language used in Unity for game development. While I consider myself at an intermediate level, I am confident in my ability to write efficient and effective code for game development projects.", "Python was one of my first programming language, which I learned in 2018. I have since used it to extract and analyze data, and consider myself at an intermediate level. I enjoy exploring Python's many libraries and tools to create powerful and customizable data analysis solutions.", "As a mathematics and physics tutor, I use LaTeX to prepare worksheets and notes for my students. While I consider myself at an intermediate level, I am always eager to learn new LaTeX syntax and commands to improve the quality and readability of my materials.", "I have used OpenShot to edit numerous videos for my Tetris YouTube channel, and consider myself at an intermediate level. With its user-friendly interface and powerful editing tools, I am able to create engaging and professional-looking videos for my audience."]
var onHover = false;


for (let i = 0; i < 9; i++) {
    var iconTemp = document.getElementById("pic-" + i.toString());
    var containerTemp = document.getElementById("con-" + i.toString());
    
    iconArray.push(iconTemp);
    containerArray.push(containerTemp);
}


for (let i = 0; i < 9; i++) {
    containerArray[i].addEventListener("mouseover", () => {
        if (phase>=2){
            descPElement.innerHTML = descriptionArray[i];
            descPElement.style.opacity = 1;
            for (let j = 0; j < 9; j++) {
                if(i != j){
                    iconArray[j].style.opacity = 0.1;
                }
            }
        }
    });

    containerArray[i].addEventListener("mouseout", () => {
        if(phase>= 2){
            descPElement.style.opacity = 0;
            
            for (let j = 0; j < 9; j++) {
                if(i != j){
                    iconArray[j].style.opacity = 1;
                }
            }
        }
        
    });
}

