let dark_Icon = document.getElementById("D_M_Icon");

dark_Icon.addEventListener("click", () => {
  document.body.classList.toggle("dark_theme");
  if (document.body.classList.contains("dark_theme")) {
    dark_Icon.src = "img/sun.png";
  } else {
    dark_Icon.src = "img/moon.png";
  }
});
