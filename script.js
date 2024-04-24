
const cool = document.createElement("img");
cool.src = "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg";
cool.width = "50px";

var makeItBigger = function() {
    // "50px" + 1 -> 50px1
    cool.style.width = (parseFloat(cool.style.width) + 1) + "px";  
  };

window.setInterval(makeItBigger, 1000/30)

document.body.appendChild(cool);