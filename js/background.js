const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"];
const randomImage = images[Math.floor(Math.random()*images.length)];
// const bgImage = document.createElement("img");
// bgImage.src=`img/${randomImage}`;
// document.body.appendChild(bgImage);
document.body.style.backgroundImage = `url(img/${randomImage})`;   //배경화면으로 적용할때