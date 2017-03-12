/* jshint -W117 */
var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Models.Friend = Backbone.Model.extend({
    defaults: {
      id: null,
      title: '',
      image: '',
      link: '',
      text: '',
      state: false
    }
  });

  return App;
}(App));
