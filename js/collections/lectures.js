var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Collections.Lectures = Backbone.Collection.extend({
    url: '/api/lectures',
    model: App.Models.Main
  });

  return App;
}(App));
