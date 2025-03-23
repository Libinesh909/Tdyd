document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
        }, 1000);
    }, 2000);

    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});