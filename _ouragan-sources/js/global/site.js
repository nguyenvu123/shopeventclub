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
        var title = $(".group-dropdown > a");
        title.click(function (event) {
            event.preventDefault();

            if ($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active');
            } else {
                $('.group-dropdown').removeClass('active');
                $(this).parent().addClass('active');
            }
        });
    }

    function menu() {
        $('.icon-menu').click(function () {
           alert("343434");
        });
    }


    $(document).ready(function () {
        pinHeader();
        dropdown();
        menu();
    });


})(jQuery);
