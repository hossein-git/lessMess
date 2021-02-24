(function ($) {
    'use strict'

    $('.plus').on('click', function () {
        let qtyInput = $(this).prev();
        if (qtyInput.val()) {
            if ($(this).data('max-value') <= qtyInput.val()) {
                return;
            }
            qtyInput.val(+qtyInput.val() + Number(qtyInput.data('step')));
        }
    });
    $('.minus').on('click', function () {
        let qtyInput = $(this).next();
        if (qtyInput.val() <= $(this).data('min-value')) {
            return;
        }
        qtyInput.val(+qtyInput.val() - Number(qtyInput.data('step')));
    });


    $(".background_bg").each(function () {
        var attr = $(this).attr('data-img-src');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css('background-image', 'url(' + attr + ')');
        }
    });

    //Show Hide dropdown-menu Main navigation
    $(document).on('ready', function () {
        $('.dropdown-menu a.dropdown-toggler').on('click', function () {
            console.log('ds')
            // var $el = $( this );
            // var $parent = $( this ).offsetParent( ".dropdown-menu" );
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');
            $(this).parent("li").toggleClass('show');
            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function () {
                $('.dropdown-menu .show').removeClass("show");
            });
            return false;
        });
    });

    //Hide Navbar Dropdown After Click On Links
    var navBar = $(".header_wrap");
    var navbarLinks = navBar.find(".navbar-collapse ul li a.page-scroll");

    $.each(navbarLinks, function () {

        var navbarLink = $(this);

        navbarLink.on('click', function () {
            navBar.find(".navbar-collapse").collapse('hide');
            $("header").removeClass("active");
        });

    });

    var rclass = true;

    $("html").on('click', function () {
        if (rclass) {
            $('.categories_btn').addClass('collapsed');
            $('.categories_btn,.side_navbar_toggler').attr('aria-expanded', 'false');
            $('#navCatContent,#navbarSidetoggle').removeClass('show');
        }
        rclass = true;
    });

    $(".categories_btn,#navCatContent,#navbarSidetoggle .navbar-nav,.side_navbar_toggler").on('click', function() {
        rclass = false;
    });


    //Main navigation Active Class Add Remove
    $('.navbar-toggler').on('click', function() {
        $("header").toggleClass("active");
        if($('.search-overlay').hasClass('open'))
        {
            $(".search-overlay").removeClass('open');
            $(".search_trigger").removeClass('open');
        }
    });






})(jQuery);
