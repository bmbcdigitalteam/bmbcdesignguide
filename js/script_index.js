let navBar = document.getElementById("nav_bar")
let openNavBtn = document.getElementById("open_nav_btn")
openNavBtn.addEventListener("click", () => {
    navBar.classList.toggle("open")
})