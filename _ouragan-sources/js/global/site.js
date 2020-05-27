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


    $(document).ready(function () {
        pinHeader();
        dropdown();
    });


})(jQuery);
