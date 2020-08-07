(function ($) {
    'use strict';

    var width_window = $(window).width();

    function slick(){
        // var list_image = $('.product .list-image');
        // var list_image_item = $('.product .list-image .item');
        // if (list_image_item.length) {
        //     list_image.slick(
        //         {
        //             dots: true,
        //             arrows: true,
        //             slidesToShow: 1,
        //             rows: 0,
        //             infinite: true,
        //             fade: false,
        //             // appendArrows: $('.block-news .group-icon-slider'),
        //             nextArrow: "<span class='icon-slider icon-slider-right'></span>",
        //             prevArrow: "<span class='icon-slider icon-slider-left'></span>",
        //             responsive: [
        //                 {
        //                     breakpoint: 768,
        //                     settings: {
        //                         slidesToShow: 1,
        //                         vertical: false,
        //                         variableWidth: true,
        //                     }
        //                 }
        //             ]
        //         }
        //     );
        // }
    }

    $(document).ready(function () {
        slick();
    });
})(jQuery);

