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

if(jQuery) {
    
    $(document).ready(function(){

        // LOAD EXTERNAL SVG AND CONVERT IT TO INLINE SVG
        $('img[src*=".svg"]').each(function() {
            var svg = $(this).attr('src');
            var svgClass = svg.replace(/^.+\/([^\/]+).svg/g,'$1');
            
            $(this).load(svg, function(i) {
                $(this).children('svg').unwrap();
                $('svg').children('style').remove();
            });
        });

    }); // EOF - DOMREADY

}