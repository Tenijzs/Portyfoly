const YOUTUBE_URL = "https://youtube.com/@tenijz";
const DISCORD_URL = "https://discord.gg/DzrTbhWWCg";

document.getElementById("youtube-link").href = YOUTUBE_URL;
document.getElementById("footer-youtube").href = YOUTUBE_URL;
document.getElementById("footer-discord").href = DISCORD_URL;

document.getElementById("footer-website").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload();
});

document.getElementById("year").textContent = new Date().getFullYear();

const topbar = document.getElementById("topbar");
let lastScrollY = window.scrollY;
let ticking = false;
const REVEAL_THRESHOLD = 12;

function updateTopbar() {
  const currentScrollY = window.scrollY;
  const delta = currentScrollY - lastScrollY;

  if (currentScrollY <= 4) {
    topbar.classList.remove("is-hidden");
  } else if (delta > REVEAL_THRESHOLD) {
    topbar.classList.add("is-hidden");
    lastScrollY = currentScrollY;
  } else if (delta < -REVEAL_THRESHOLD) {
    topbar.classList.remove("is-hidden");
    lastScrollY = currentScrollY;
  }

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(updateTopbar);
    ticking = true;
  }
});
