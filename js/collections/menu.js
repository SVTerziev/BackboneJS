/* jshint -W117 */
var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Collections.Menu = Backbone.Collection.extend({
    url: '/api/menu',
    model: App.Models.Menu
  });

  return App;
}(App));
