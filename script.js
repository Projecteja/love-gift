
const opening = document.getElementById('opening');
const menu = document.getElementById('menu');
const music = document.getElementById('bgMusic');

document.getElementById('openGift').addEventListener('click', () => {
  opening.classList.add('hidden');
  menu.classList.remove('hidden');
  if (music) music.play().catch(() => {});
});

document.querySelectorAll('.tile').forEach(btn => {
  btn.addEventListener('click', () => {
    menu.classList.add('hidden');
    document.getElementById(btn.dataset.target).classList.remove('hidden');
  });
});

document.querySelectorAll('.back').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.content').forEach(sec => sec.classList.add('hidden'));
    menu.classList.remove('hidden');
  });
});

// Carousel
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg'
];
const carouselImage = document.getElementById('carouselImage');
let current = 0;
if (carouselImage) {
  setInterval(() => {
    current = (current + 1) % images.length;
    carouselImage.src = images[current];
  }, 3000);
}

// Date buttons
const yesBtn = document.getElementById('yesBtn');
const thinkBtn = document.getElementById('thinkBtn');
const dateMessage = document.getElementById('dateMessage');

if (yesBtn) {
  yesBtn.addEventListener('click', () => {
    dateMessage.classList.remove('hidden');
    yesBtn.textContent = '❤️ Thank You, My Love!';
    thinkBtn.classList.add('hidden');
  });
}

if (thinkBtn) {
  thinkBtn.addEventListener('mouseenter', () => {
    thinkBtn.style.transform = `translate(${Math.random()*40-20}px, ${Math.random()*20-10}px)`;
  });
  thinkBtn.addEventListener('click', () => {
    alert("I'll keep waiting for your yes. ❤️");
  });
}
