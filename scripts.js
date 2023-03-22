$(document).ready(function () {
    gsap.from("header", { duration: 1, y: "-100%", ease: "bounce" });
    gsap.from("section", { duration: 1, x: "-100vw", stagger: 0.5, delay: 1, ease: "power3.out" });
// Smooth scrolling for anchor links
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
    );
});
});