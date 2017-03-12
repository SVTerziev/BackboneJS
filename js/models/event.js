/* jshint -W117 */
var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Models.Event = Backbone.Model.extend({
    defaults: {
      id: null,
      title: '',
      startDate: '',
      endDate: '',
      link: ''
    }
  });

  return App;
}(App));
