const btn = document.getElementById("burgerBtn");
const menu = document.getElementById("sideMenu");

btn.addEventListener("click", () => {
    btn.classList.toggle("active"); // fait tourner l'orange
    menu.classList.toggle("open");  // ouvre/ferme le menu

    // Plus besoin de changer l'image, on garde toujours l'orange
});

