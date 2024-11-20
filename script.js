// Ambil elemen musik, teks, dan foto
const music = document.getElementById("backgroundMusic");
const messageText = document.getElementById("messageText");
const nellyPhoto = document.getElementById("nellyPhoto");

// Fungsi untuk memulai semua aksi: musik, teks, foto, dan konfeti
function celebrate() {
  // Memulai musik dari detik tertentu
  music.currentTime = 170; // Mulai musik dari detik ke-60
  music.play();

  // Tampilkan teks
  if (messageText) {
    messageText.style.display = "block"; // Tampilkan teks
  } else {
    console.error('Elemen dengan ID "messageText" tidak ditemukan.');
  }

  // Tampilkan foto
  if (nellyPhoto) {
    nellyPhoto.style.display = "block"; // Tampilkan foto
  } else {
    console.error('Elemen dengan ID "nellyPhoto" tidak ditemukan.');
  }

  // Menjalankan konfeti
  const canvas = document.getElementById("confettiCanvas");
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Partikel konfeti
  const confettiColors = ["#4CAF50", "#FFC107", "#2196F3", "#FF5722"];
  const particles = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    size: Math.random() * 5 + 2,
    speedY: Math.random() * 3 + 1,
    speedX: (Math.random() - 0.5) * 2,
  }));

  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      context.fillStyle = particle.color;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
      context.fill();
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      if (particle.y > canvas.height) particle.y = 0;
      if (particle.x > canvas.width || particle.x < 0) particle.x = Math.random() * canvas.width;
    });
    requestAnimationFrame(draw);
  }

  draw();
}
