/* jshint -W117 */
var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Views.Menu = Backbone.View.extend({
    tagName: 'nav',
    className: 'navbar navbar-fixed-top',
    events: {
      'click .search': 'search'
    },
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(this.template(this.collection));

      return this;
    },
    search: function () {
      var searchFor = $('input', this.el).val();
      this.trigger('search', searchFor);

      return false;
    }
  });

  return App;
}(App));
