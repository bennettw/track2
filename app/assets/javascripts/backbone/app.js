window.Track = (function(Backbone, Marionette) {


  var App = new Marionette.Application;

  App.addRegions({
  	headerRegion: '#header-region',
  	mainRegion: '#main-region',
  	footerRegion: '#footer-region'
  });

  App.addInitializer(function() {
    App.execute("footer:show");
  });

  App.on("initialize:after", function() {
    if ( Backbone.history ) {
      Backbone.history.start();
    }
  });

  return App;

})(Backbone, Marionette);