const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const image = document.getElementById("mainImage");
const music = document.getElementById("loveMusic");

const beggingImages = [
"images/image1.png",
"images/image2.png",
"images/image3.png",
"images/image4.png",
"images/image5.png"
];

const beggingMessages = [
"Please don't say no 🥺",
"Dudu is crying 😭",
"Dudu is heartbroken 💔",
"I'll be happiest if you say yes ❤️",
"Please accept my love 💕"
];

/* Preload Images */
beggingImages.forEach(src => {
const img = new Image();
img.src = src;
});

let noClickCount = 0;
let yesScale = 1;

/* YES CLICK */
yesBtn.addEventListener("click", () => {

message.innerHTML = "Bujji Bangaram Love you ❤️!!!";
image.src = "images/happy.png";

noBtn.style.display = "none";

/* 🎵 Start Music With Fade In */
music.volume = 0;
music.play();

let vol = 0;
const fade = setInterval(() => {
    if (vol < 0.5) {
        vol += 0.05;
        music.volume = vol;
    } else {
        clearInterval(fade);
    }
}, 200);

/* 🎉 Confetti Explosion */
confetti({
particleCount:150,
spread:120,
origin:{y:0.6}
});
});

/* NO CLICK */
noBtn.addEventListener("click", () => {

let index = noClickCount % beggingImages.length;

image.src = beggingImages[index];
message.innerHTML = beggingMessages[index];

noClickCount++;

moveNoButton();

yesScale += 0.1;
yesBtn.style.transform = `scale(${yesScale})`;
});

/* Move NO Button */
function moveNoButton(){
const x = Math.random()*200 -100;
const y = Math.random()*200 -100;
noBtn.style.transform=`translate(${x}px,${y}px)`;
}

/* Floating Hearts */
setInterval(()=>{
const heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤️";
heart.style.left=Math.random()*100+"vw";
heart.style.animationDuration=(Math.random()*3+3)+"s";
document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>heart.remove(),6000);
},300);

/* Mouse Sparkle Trail */
document.addEventListener("mousemove",(e)=>{
const sparkle=document.createElement("div");
sparkle.innerHTML="✨";
sparkle.style.position="fixed";
sparkle.style.left=e.clientX+"px";
sparkle.style.top=e.clientY+"px";
sparkle.style.pointerEvents="none";
sparkle.style.animation="fade 1s forwards";
document.body.appendChild(sparkle);

setTimeout(()=>sparkle.remove(),1000);
});
