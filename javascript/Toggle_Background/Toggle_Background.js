toggleButton = document.getElementById("toggleButton");

function toggle_dark() {
  toggleButton.classList.toggle("dark");
}

toggleButton.addEventListener("click", toggle_dark);
