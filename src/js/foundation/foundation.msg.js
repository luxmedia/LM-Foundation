;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.msg = {
    name : 'msg',

    version : '{{VERSION}}',

    settings : {
      callback: function (){}
    },

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function () {
      var self = this,
          S = this.S;

      $(this.scope).off('.msg').on('click.fndtn.msg', '[' + this.attr_name() + '] .close', function (e) {
          var msgBox = S(this).closest('[' + self.attr_name() + ']'),
              settings = msgBox.data(self.attr_name(true) + '-init') || self.settings;

        e.preventDefault();
        if (Modernizr.csstransitions) {
          msgBox.addClass('msg-close');
          msgBox.on('transitionend webkitTransitionEnd oTransitionEnd', function(e) {
            S(this).trigger('close').trigger('close.fndtn.msg').remove();
            settings.callback();
          });
        } else {
          msgBox.fadeOut(300, function () {
            S(this).trigger('close').trigger('close.fndtn.msg').remove();
            settings.callback();
          });
        }
      });
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));