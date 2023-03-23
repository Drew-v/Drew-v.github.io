$(document).ready(function () {
    gsap.from("section", { duration: 1, x: "-100vw", stagger: 0.5, delay: 1, ease: "power3.out" });

    $("#down-arrow a").on("click", function (e) {
        e.preventDefault();
        const targetSection = $($(this).attr("href"));
        $("html, body").animate({ scrollTop: targetSection.offset().top }, 500, function () {
            targetSection.css("opacity", 0);
            targetSection.animate({ opacity: 1 }, 500);
        });
    });
});
