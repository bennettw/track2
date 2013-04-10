Track.module("FooterApp", function(FooterApp, App, Backbone, Marionette, $, _) {

  this.startWithParent = false;

  var API = {
    showFooter: function() {
      FooterApp.Show.Controller.showFooter();
    }
  };

  FooterApp.on("start", function() {
    API.showFooter();
  });

  // App.commands.setHandler("footer:show", function() {
  //   API.showFooter();
  // });
});