// =========================================
// ELEMENTS
// =========================================

const surpriseBtn = document.getElementById("surpriseBtn");
const giftBox = document.getElementById("giftBox");
const music = document.getElementById("birthdayMusic");
const cake = document.querySelector(".cake");
const container = document.querySelector(".container");

const birthdayMessage = `
🎂 Happy Birthday, VIVEK SAGAR! ❤️

From the day we became friends,
life became brighter.

Thank you for always being there,
for making me smile,
and for being such an amazing person.

May this year bring you
lots of happiness,
good health,
success,
and beautiful memories.

Never stop smiling,
because your smile makes everyone around you happy.

Enjoy your special day! 🎉

With lots of love,
Your Best Friend ❤️
`;

let index = 0;

// =========================================
// TYPEWRITER EFFECT
// =========================================

function typeWriter() {

    const text = document.getElementById("message");

    if (!text) return;

    if (index < birthdayMessage.length) {

        text.innerHTML += birthdayMessage.charAt(index);
        index++;

        setTimeout(typeWriter, 40);

    }

}

// =========================================
// SHOW MESSAGE
// =========================================

function showMessage() {

    document.getElementById("introText").style.display = "none";
    document.getElementById("giftBox").style.display = "none";
    document.getElementById("surpriseBtn").style.display = "none";

    const msg = document.createElement("p");
    msg.id = "message";
   

    container.appendChild(msg);

    index = 0;
    typeWriter();
}

// =========================================
// SHOW CAKE
// =========================================

function showCake() {

    if (cake) {

        cake.classList.add("showCake");

    }

}

// =========================================
// CONFETTI
// =========================================

function createConfetti() {

    for (let i = 0; i < 180; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.background =
            `hsl(${Math.random() * 360},100%,60%)`;

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confetti);

        let pos = -20;

        const speed = Math.random() * 6 + 3;

        const interval = setInterval(() => {

            pos += speed;

            confetti.style.top = pos + "px";

            confetti.style.left =
                parseFloat(confetti.style.left) +
                Math.sin(pos / 30) +
                "px";

            if (pos > window.innerHeight) {

                clearInterval(interval);

                confetti.remove();

            }

        }, 20);

    }

}

// =========================================
// HEART RAIN
// =========================================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (18 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

function startHeartRain() {

    setInterval(createHeart, 300);

}

// =========================================
// GIFT OPEN
// =========================================

function openGift() {

    giftBox.classList.add("openGift");

}

// =========================================
// MUSIC
// =========================================

function playMusic() {

    const music = document.getElementById("birthdayMusic");

    if (!music) {
        console.log("Music element not found");
        return;
    }

    music.volume = 0.4;
    music.currentTime = 0;

    music.play()
        .then(() => {
            console.log("Music Playing");
        })
        .catch((err) => {
            console.error("Music Error:", err);
        });

}

// =========================================
// SURPRISE BUTTON
// =========================================

surpriseBtn.addEventListener("click", () => {

    playMusic();

    openGift();

    showCake();

    createConfetti();

    startHeartRain();

    setTimeout(() => {

        showMessage();

    }, 900);

});
// =========================================
// FIREWORKS
// =========================================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle{

    constructor(x,y,color){

        this.x=x;
        this.y=y;

        this.radius=Math.random()*3+2;

        this.color=color;

        this.speedX=(Math.random()-0.5)*8;
        this.speedY=(Math.random()-0.5)*8;

        this.alpha=1;

    }

    update(){

        this.x+=this.speedX;
        this.y+=this.speedY;

        this.speedY+=0.03;

        this.alpha-=0.012;

    }

    draw(){

        ctx.save();

        ctx.globalAlpha=this.alpha;

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI*2
        );

        ctx.fillStyle=this.color;

        ctx.shadowBlur=15;

        ctx.shadowColor=this.color;

        ctx.fill();

        ctx.restore();

    }

}

function createFirework(){

    const x=Math.random()*canvas.width;

    const y=Math.random()*canvas.height/2;

    const color=`hsl(${Math.random()*360},100%,60%)`;

    for(let i=0;i<80;i++){

        particles.push(

            new Particle(x,y,color)

        );

    }

}

function animateFireworks(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    for(let i=particles.length-1;i>=0;i--){

        particles[i].update();

        particles[i].draw();

        if(particles[i].alpha<=0){

            particles.splice(i,1);

        }

    }

    requestAnimationFrame(
        animateFireworks
    );

}

animateFireworks();

setInterval(createFirework,2500);

// =========================================
// SPARKLES
// =========================================

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.style.position="fixed";

    sparkle.style.width="4px";

    sparkle.style.height="4px";

    sparkle.style.borderRadius="50%";

    sparkle.style.background="white";

    sparkle.style.boxShadow=
    "0 0 15px white";

    sparkle.style.left=
    Math.random()*100+"vw";

    sparkle.style.top=
    Math.random()*100+"vh";

    sparkle.style.opacity=".8";

    sparkle.style.zIndex="5";

    sparkle.style.pointerEvents="none";

    document.body.appendChild(sparkle);

    let scale=.3;

    const grow=setInterval(()=>{

        scale+=.08;

        sparkle.style.transform=
        `scale(${scale})`;

        sparkle.style.opacity-=.03;

        if(scale>2){

            clearInterval(grow);

            sparkle.remove();

        }

    },40);

}

setInterval(createSparkle,300);

// =========================================
// WINDOW RESIZE
// =========================================

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

});

// =========================================
// AUTO FIREWORK ON LOAD
// =========================================

setTimeout(()=>{

    createFirework();

},1000);

// =========================================
// END
// =========================================