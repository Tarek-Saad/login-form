let dark_Icon = document.getElementById("D_M_Icon");

dark_Icon.addEventListener("click", () => {
  document.body.classList.toggle("dark_theme");
  if (document.body.classList.contains("dark_theme")) {
    dark_Icon.src = "img/sun.png";
  } else {
    dark_Icon.src = "img/moon.png";
  }
});

// DarkMode With Local Storage
let check = document.getElementById("Dark_check");

if (localStorage.getItem("darkMode") === null) {
  localStorage.setItem("darkMode", "false");
}

// when check

function WhenChange() {
  if (localStorage.getItem("darkMode") === "false") {
    document.body.classList.toggle("dark_theme");
  } else {
    document.body.classList.remove("dark_theme");
  }
}

// when change check
function Change_Check() {
  if (localStorage.getItem("darkMode") === "false") {
    localStorage.setItem("darkMode", "true");
    WhenChange();
  } else {
    localStorage.setItem("darkMode", "false");
    WhenChange();
  }
}
