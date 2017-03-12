/* jshint -W117 */
var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Collections.Friends = Backbone.Collection.extend({
    url: '/api/friends',
    model: App.Models.Friend
  });

  return App;
}(App));
