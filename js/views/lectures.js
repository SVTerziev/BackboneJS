var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Views.Lectures = Backbone.View.extend({
    className: 'card',
    initialize: function (options) {
      _.bindAll(this, 'render')
      this.listenTo(this.collection, 'sync', this.render);
      this.listenTo(this.collection, 'reset', this.render);;
      this.options = options;
      this.childViews = [];
    },
    render: function () {
      var perPage = 5;
      var lecturesFrom = (this.options.page - 1) * perPage;
      var lecturesTo = Math.min(lecturesFrom + perPage, this.collection.length);

      var randomLectureId = _.random(0, this.collection.length - 1);
      var container = document.createDocumentFragment();
      var singleLecture,
          randomLecture,
          pagination;

      this.$el.html(this.template());
      for (var i = lecturesFrom; i < lecturesTo; i++) {
        singleLecture = new App.Views.Item({
          model: this.collection.models[i],
          itemFor: 'lectures'
        });
        container.appendChild(singleLecture.el);
        this.childViews.push(singleLecture);
      }

      randomLecture = new App.Views.RandomLecture({
        model: this.collection.models[randomLectureId]
      });
      pagination = new App.Views.Paginator({
        collection: this.collection,
        page: this.options.page,
        for: 'lectures'
      });

      $('.lectures', this.el).append(container);
      $('.random-lecture').html(randomLecture.el);
      $('.card-footer', this.el).html(pagination.el);

      this.childViews.push(randomLecture, pagination);
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
