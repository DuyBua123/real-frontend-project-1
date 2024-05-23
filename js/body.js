$(document).ready(() => {
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

    // Item menu slide
    $("#item-slides").slick({
        rows: 2,
        slidesPerRow: 3,
        prevArrow: $("#itemPrevArrow"),
        nextArrow: $("#itemNextArrow")
    });
});