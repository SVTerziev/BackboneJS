var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Views.ItemDetails = Backbone.View.extend({
    className: 'card item-details',
    initialize: function () {
      _.bindAll(this, 'render');
      this.childViews = [];
      this.render();
      this.model.set('views', parseInt(this.model.get('views')) + 1);
      this.model.save();
    },
    render: function () {
      var self = this;
      var randomLecture;
      var randomLectureId = _.random(0, this.collection.length - 1);

      this.$el.html(this.template(this.model.toJSON()));

      randomLecture = new App.Views.RandomLecture({
        model: this.collection.models[randomLectureId]
      });
      $('.random-lecture').html(randomLecture.el);

      this.childViews.push(randomLecture);
      return this;
    },
    close: function () {
      this.remove();
      this.unbind();
      _.each(this.childViews, function (childView) {
        if (childView.close) {
          childView.close();
        }
      });
    }
  });

  return App;
}(App));
