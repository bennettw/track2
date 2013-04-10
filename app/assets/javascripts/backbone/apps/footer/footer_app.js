Track.module("FooterApp", function(FooterApp, App, Backbone, Marionette, $, _) {

  var API = {
    showFooter: function() {
      FooterApp.Show.Controller.showFooter();
    }
  };

  App.commands.setHandler("footer:show", function() {
    API.showFooter();
  });
});