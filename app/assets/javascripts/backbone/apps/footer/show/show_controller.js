Track.module("FooterApp.Show", function(Show, App, Backbone, Marionette, $, _) {

  Show.Controller = {
    showFooter: function() {
      footerView = this.getFooterView();
      App.footerRegion.show(footerView);
    }
  };

  getFooterView: function() {
    new Show.Footer();
  }
});