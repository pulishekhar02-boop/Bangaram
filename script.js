const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const image = document.getElementById("mainImage");

const beggingImages = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",
    "images/image4.png",
    "images/image5.png"
];

const beggingMessages = [
    "Please don't say no 🥺",
    "Dudu is crying (Please Bujji)😭",
    "Dudu is heartbroken 💔",
    "I'll be the happiest if you say yes (Naa Bangaram Kadhu)❤️",
    "Please accept my love 💕"
];

let noClickCount = 0;

yesBtn.addEventListener("click", () => {

    message.innerHTML = "Bujji Bangaram Love you ❤️!!!";
    image.src = "images/happy.png";

    noBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {

    let index = noClickCount % beggingImages.length;

    image.src = beggingImages[index];
    message.innerHTML = beggingMessages[index];

    noClickCount++;

    moveNoButton();
});

function moveNoButton() {

    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
