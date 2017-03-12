var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Views.Item = Backbone.View.extend({
    className: 'card-block',
    initialize: function (options) {
      this.options = options;
      this.render();
    },
    render: function () {
      var text = this.model.get('text');
      if (text.length > 240) {
        this.model.set('text', text.substring(0, 240) + '...');
      }
      this.model.set('itemFor', this.options.itemFor);
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    }
  });

  return App;
}(App));
