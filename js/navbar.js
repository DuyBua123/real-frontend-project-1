$(document).ready(() => {
    // Change style of dropdown menu
    $("#dropdown-btn").on("click", () => {
        const menu = document.getElementById("dropdown-menu")
        menu.style.height = "430px"
    })
    $("#dropdown-btn").on("mouseenter", () => {
        const menu = document.getElementById("dropdown-menu")
        menu.style.height = "0"
    })

    // Animate navbar when scrolling down
    window.onscroll = () => {
        if(document.documentElement.scrollTop > 1) {
            document.getElementById("navbar").style.top = "0"
        } else {
            document.getElementById("navbar").style.top = "40px"
        }
    }


});