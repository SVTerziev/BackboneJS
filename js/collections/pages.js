var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Collections.Pages = Backbone.Collection.extend({
    url: '/api/pages',
    model: App.Models.Main
  });

  return App;
}(App));
