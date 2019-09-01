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

 

    // initialization of form validation
    $.HSCore.components.HSValidation.init('.js-validate');

    // initialization of go to
    $.HSCore.components.HSGoTo.init('.js-go-to');
});

