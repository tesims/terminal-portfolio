$(document).ready(function() {

    // Animate page elements on scroll
    $(window).on("scroll", function() {
        $(".page").each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                gsap.to($(this), { duration: 1, opacity: 1, y: 0 });
            }
        });
    });

    // Initial animation for pages
    gsap.set(".page", { opacity: 0, y: 50 });
});
