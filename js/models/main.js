/* jshint -W117 */
var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Models.Main = Backbone.Model.extend({
    defaults: {
      id: null,
      title: '',
      image: '',
      text: '',
      date: '',
      views: 0
    }
  });

  return App;
}(App));
