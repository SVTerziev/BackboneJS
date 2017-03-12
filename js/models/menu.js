/* jshint -W117 */
var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Models.Menu = Backbone.Model.extend({
    defaults: {
      id: null,
      name: '',
      link: '',
      parent: 0
    }
  });

  return App;
}(App));
