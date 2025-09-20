$(function () {
    /*************************************************************/
    $(".navbar .navbar-nav .nav-item .nav-link").click(function () {
        $(".navbar-collapse").removeClass("show");
    });
    // Smoothly Scroll To Element
    $(".navbar-home .navbar-nav .nav-item .nav-link").click(function (e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: $($(this).data("section")).offset().top - 57,
            },
            300
        );
    });
    // Sync Navbar Links With Sections
    $(window).scroll(function () {
        $("section").each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 58) {
                let id = $(this).attr("id");
                $(`.navbar .navbar-nav .nav-item .nav-link[data-section="#${id}"]`)
                    .addClass("active")
                    .parent()
                    .siblings()
                    .find("a")
                    .removeClass("active");
            }
        });
    });

    const scrollToTop = $(".scroll-to-top");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            scrollToTop.fadeIn();
        } else {
            scrollToTop.fadeOut();
        }
    });

    scrollToTop.click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            300
        );
    });
    /*************************************************************/
});
