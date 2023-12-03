var nav_links = document.getElementsByClassName("nav-link");
for (var i = 0; i < nav_links.length; i++) {
    nav_links[i].addEventListener("click", () => {
        var current = document.getElementsByClassName("active");
        current[0].classList.remove('active');
        this.classList.add('active');
    });
}

var footer_links = document.querySelectorAll("footer li a");
for (let i = 0; i < footer_links.length; i++) {
    footer_links[i].addEventListener("click", () => {
        var current = document.getElementsByClassName("active");
        current[0].classList.remove('active');
        nav_links[i].classList.add('active');
    })
}