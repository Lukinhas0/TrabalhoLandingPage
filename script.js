// Script para trocar as imagens da hero section
let currentImageIndex = 0;
const images = [
    "img/ecobin1.jpg",
    "img/ecobin2.jpg",
    "img/ecobin3.jpg"
];
const heroImg = document.getElementById('hero-img');

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroImg.src = images[currentImageIndex];
}

setInterval(changeImage, 4000); // Troca a imagem a cada 4 segundos
