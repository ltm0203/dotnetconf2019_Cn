$(window).on('load', function () {
    // initialization of HSMegaMenu component
    $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        pageContainer: $('.container'),
        breakpoint: 767.98,
        hideTimeOut: 0
    });

    // initialization of svg injector module
    $.HSCore.components.HSSVGIngector.init('.js-svg-injector');

    // initialization of HSScrollNav component
    $.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {
        duration: 700
    });

});

$(document).on('ready', function () {
    // initialization of header
    $.HSCore.components.HSHeader.init($('#header'));

    // initialization of slick carousel
    $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

    // initialization of scroll effect component
    $.HSCore.components.HSScrollEffect.init('.js-scroll-effect');

    // initialization of unfold component
    $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

    // initialization of video on background
    $.HSCore.components.HSBgVideo.init('.js-bg-video');

    // initialization of fancybox
    $.HSCore.components.HSFancyBox.init('.js-fancybox');

    // initialization of form validation
    $.HSCore.components.HSValidation.init('.js-validate');

    // initialization of go to
    $.HSCore.components.HSGoTo.init('.js-go-to');


    // initialization of text animation (typing)
    var typed = new Typed(".u-text-animation.u-text-animation--typing", {
        strings: ["开源", "创新", "共享"],
        typeSpeed: 70,
        loop: true,
        backSpeed: 40,
        backDelay: 2000
    });

    var typed2 = new Typed(".u-text-animation.u-text-animation--typing2", {
        strings: ["共享", "开源", "创新"],
        typeSpeed: 70,
        loop: true,
        backSpeed: 40,
        backDelay: 2000
    });
    var typed3 = new Typed(".u-text-animation.u-text-animation--typing3", {
        strings: ["创新", "共享", "开源"],
        typeSpeed: 70,
        loop: true,
        backSpeed: 40,
        backDelay: 2000
    });
});

