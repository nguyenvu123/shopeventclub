(function ($) {
    'use strict';

    function pinHeader() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $('#header').addClass("pin");
            } else {
                $('#header').removeClass("pin");
            }
        });
    }

    function dropdown() {
        $('.custom-dropdown').each(function(){
            $(this).find('.title-dropdown').click(function (event) {
                $(this).toggleClass('active');
                $(this).parent().find('.dropdown').slideToggle();
            });
        });
    }

    function menu() {
        $('.icon-menu').click(function () {
            $(".include-menu").toggleClass("active");
            // $(".menu").slideToggle("slow");
        });
    }


    $(document).ready(function () {
        pinHeader();
        dropdown();
        menu();
    });


})(jQuery);
