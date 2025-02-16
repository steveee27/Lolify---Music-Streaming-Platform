const logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  location.replace("home.html");
});
const playlist = document.getElementById("playlist");
playlist.addEventListener("click", () => {
  location.replace("playlist.html");
});
const picture = document.getElementById("picture-id");
picture.addEventListener("mouseover", () => {
  picture.src = "../images/Property 1=Variant2.png";
});

picture.addEventListener("mouseout", () => {
  picture.src = "../images/PROF PICT.png";
});
const profile = document.getElementById("profile-id");
profile.addEventListener("click", () => {
  location.replace("profile.html");
});
const chart = document.getElementById("chart-id");
chart.addEventListener("click", () => {
  location.replace("chart.html");
});
