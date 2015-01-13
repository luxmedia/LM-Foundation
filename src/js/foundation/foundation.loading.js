/* global window, document, define, jQuery, setInterval, clearInterval */

;(function($) {
    $.fn.extend({

        LMLoading: function() {
            // var winWidth            = $(window).width(); //retrieve current window width
            // var winHeight           = $(window).height(); //retrieve current window height
            // var fInSpeed            = 200; // Fade In Speed
            // var fOutSpeed           = 400; // Fade Out Speed
        },
        // TOGGLE MODAL WINDOWS AND POPUPS
        showLoading: function() {
            $(".loading").height($(window).height()).fadeIn(200);
        },
        hideLoading: function() {
            $(".loading").fadeOut(400);
        },
        showLoadingInline: function(container) {
            $(container).append('<div class="loading loading--inline" style="height:' + $(container).height() + '"><div class="container"><div class="box loading-ico"></div></div></div>');
        },
        hideLoadingInline: function(container) {
            $(container).find(".loading--inline").fadeOut(function(){
                $(this).remove();
            });
        }
    });
})( jQuery );