document.addEventListener("DOMContentLoaded", () => {
  const splashVideo = document.getElementById("splash-video");
  const splashScreen = document.getElementById("splash-screen");

  // Redirect ke dashboard.html setelah video selesai
  splashVideo.addEventListener("ended", () => {
    // Menambahkan animasi fade-out
    splashScreen.style.opacity = 0;

    // Setelah animasi selesai, lakukan redirect ke dashboard
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Ganti dengan URL tujuan Anda
    }, 1000); // Durasi animasi fade-out (1 detik)
  });
});
