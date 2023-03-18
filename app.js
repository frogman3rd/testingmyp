const toggleButton = document.getElementById("toggle");
const menu = document.getElementById("dropdown-menu");


function toggleMenu() {
    if(menu.style.display === "none"){
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }
}

