// LOAD FOUNDATION SCRIPTS
$(document).foundation({
    offcanvas : {
        // Sets method in which offcanvas opens.
        // [ move | overlap_single | overlap ]
        open_method: 'move',
        // Should the menu close when a menu link is clicked?
        // [ true | false ]
        close_on_click: false
    }
});

$(document).ready(function(){

    if($(".tabs").length) {
        try {
            $(".tabs").accessibleTabs();
        } catch(e) {
            debug(e);
        }
    }

    // LOAD EXTERNAL SVG AND CONVERT IT TO INLINE SVG
    // $('img[src*=".svg"]').each(function() {
    //     var svg = $(this).attr('src');
    //     var svgClass = svg.replace(/^.+\/([^\/]+).svg/g,'$1');
        
    //     $(this).load(svg, function(i) {
    //         $(this).children('svg').unwrap();
    //         $('svg').children('style').remove();
    //     });
    // });

    $('#slider').slick({
        dots: true,
        arrow: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.demo-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

}); // EOF - DOMREADY