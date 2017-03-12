var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Collections.News = Backbone.Collection.extend({
    url: '/api/news',
    model: App.Models.Main
  });

  return App;
}(App));
