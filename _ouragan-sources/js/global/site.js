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
        $('.custom-dropdown').each(function () {
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

    function search() {
        $('.include-search .icon-search').click(function () {
            $('.include-input-search').toggleClass('active');
            $('.search-result').removeClass('active');
        });

        $('input').tagsinput({
            maxTags: 2,
            trimValue: true,
            focusClass: 'my-focus-class',
            // confirmKeys: [13, 44]

        });

        $('.bootstrap-tagsinput input').on('focus', function() {
            $(this).closest('.bootstrap-tagsinput').addClass('has-focus');
        }).on('blur', function() {
            $(this).closest('.bootstrap-tagsinput').removeClass('has-focus');
            if(!$(this).closest('.bootstrap-tagsinput').hasClass('has-focus')) {
                // $('.search-result .box').removeClass('active');
            }
        });

        $('.bootstrap-tagsinput input').keypress(function(event){

            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                $('.search-result').addClass('active');
            }
        });
    }


    $(document).ready(function () {
        pinHeader();
        dropdown();
        menu();
        search();

    });


})(jQuery);
