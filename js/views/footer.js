var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Views.Footer = Backbone.View.extend({
    tagName: 'footer',
    className: 'row',
    events: {
      'click input[type="submit"]': 'submit'
    },
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(this.template());

      return this;
    },
    submit: function (e) {
      $.post('sendMail.php', $('form').serialize(), function (response) {
        console.log(JSON.parse(response).error);
      });

      return false;
    }
  });

  return App;
}(App));
