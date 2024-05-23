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

    // Hero image slides
    $("#hero-image-slide").slick({
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: $("#prevArrow"),
        nextArrow: $("#nextArrow"),
        dots: true,
        customPaging: () => {
            return "<button></button>"
        }
    });


    $("#outer-hero-image").on("mouseenter",() => {
        const prevArrow = document.getElementById("prevArrow");
        const nextArrow = document.getElementById("nextArrow");

        prevArrow.style.marginLeft = "10px"
        nextArrow.style.marginRight = "10px"

    })
    $("#outer-hero-image").on("mouseleave",() => {
        const prevArrow = document.getElementById("prevArrow");
        const nextArrow = document.getElementById("nextArrow");

        prevArrow.style.marginLeft = "-35px"
        nextArrow.style.marginRight = "-35px"

    })
});