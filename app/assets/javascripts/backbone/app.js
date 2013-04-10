var Track = new Marionette.Application();

Track.addRegions({
	headerRegion: '#header-region',
	mainRegion: '#main-region',
	footerRegion: '#footer-region'
});

Track.addInitializer(function() {
  Track.execute("footer:show");
});

Track.on("initialize:after", function() {
  if ( Backbone.history ) {
    Backbone.history.start();
  }
});
