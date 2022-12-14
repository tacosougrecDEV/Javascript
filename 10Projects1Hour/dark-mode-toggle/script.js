const toggle = document.getElementById("toggle");
const mode = document.getElementById("mode");

toggle.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
    if (mode.innerHTML === "Light Mode") {
        mode.innerHTML = "Dark Mode";
    } else {
        mode.innerHTML = "Light Mode";
    }
})
