var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Views.RandomLecture = Backbone.View.extend({
    className: 'card',
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    },
    close: function () {
      this.remove();
      this.unbind();
    }
  });

  return App;
}(App));
