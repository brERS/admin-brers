let sidebarToggle = document.querySelector(".sidebarToggle");
sidebarToggle.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("active");
    document.getElementById("page").classList.toggle("active");
    document.getElementById("content").classList.toggle("active");
    document.getElementById("header").classList.toggle("active");
})