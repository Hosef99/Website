var clipboardElement = document.getElementById("clipboard");

function copyEmail() {
     // Copy the text inside the text field
    navigator.clipboard.writeText("joseph.txh@gmail.com");
  
    
    clipboardElement.style.opacity = 1;
    
    setTimeout(() => {
        clipboardElement.style.opacity = 0;
    }, 2000);
}