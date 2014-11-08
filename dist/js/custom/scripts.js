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