const img = document.getElementById("like-img");
img.addEventListener("click", () => {
  if (img.src.includes("images/solidHeart.png")) {
    img.src = "images/IMAGE (2).png";
  } else {
    img.src = "images/solidHeart.png";
  }
});
const logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  location.replace("home.html");
});
const playlist = document.getElementById("playlist");
playlist.addEventListener("click", () => {
  location.replace("playlist.html");
});
const profile = document.getElementById("profile-id");
profile.addEventListener("click", () => {
  location.replace("profile.html");
});
const chart = document.getElementById("chart-id");
chart.addEventListener("click", () => {
  location.replace("chart.html");
});
