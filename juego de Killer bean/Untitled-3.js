const mario = document.getElementById("mario");
const ground = document.getElementById("ground");
let isJumping = false;
let position = 0;

// Función para hacer saltar a Mario
function jump() {
    if (isJumping) return;

    isJumping = true;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            // Bajar a Mario
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    mario.style.bottom = position + "px";
                }
            }, 20);
        } else {
            // Subir a Mario
            position += 20;
            mario.style.bottom = position + "px";
        }
    }, 20);
}

// Escuchar la tecla de espacio para saltar
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        jump();
    }
});