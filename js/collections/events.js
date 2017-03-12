/* jshint -W117 */
var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Collections.Events = Backbone.Collection.extend({
    url: '/api/events',
    model: App.Models.Event
  });

  return App;
}(App));
