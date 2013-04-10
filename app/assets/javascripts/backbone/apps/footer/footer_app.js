window.Track.module("FooterApp", function(FooterApp, App, Backbone, Marionette, $, _) {

  var API = {
    showFooter: function() {
      FooterApp.Show.Controller.showFooter();
    }
  };

  // TODO: App is not in scope here, why not?
  App.commands.addHandler("footer:show", function() {
    API.showFooter();
  });
});