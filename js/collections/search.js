var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Collections.Search = Backbone.Collection.extend({
    initialize: function (model, options) {
      this.search = options.search;
    },
    url: function () {
      return '/api/search/' + this.search;
    }
  });

  return App;
}(App));
