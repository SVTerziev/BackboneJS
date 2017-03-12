var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Views.News = Backbone.View.extend({
    className: 'card',
    initialize: function (options) {
      _.bindAll(this, 'render')
      //this.listenTo(this.collection, 'sync', this.render);
      this.listenTo(this.collection, 'reset', this.render);;
      this.options = options;
      this.childViews = [];
      this.render();
    },
    render: function () {
      var perPage = 5;
      var newsFrom = (this.options.page - 1) * perPage;
      var newsTo = Math.min(newsFrom + perPage, this.collection.length);
      var lectures = this.options.lectures;

      var randomLectureId = _.random(0, lectures.length - 1);
      var container = document.createDocumentFragment();
      var singleNews,
          randomLecture,
          pagination;

      this.$el.html(this.template());
      for (var i = newsFrom; i < newsTo; i++) {
        singleNews = new App.Views.Item({
          model: this.collection.models[i],
          itemFor: 'news'
        });
        container.appendChild(singleNews.el);
        this.childViews.push(singleNews);
      }

      randomLecture = new App.Views.RandomLecture({
        model: lectures.models[randomLectureId]
      });
      pagination = new App.Views.Paginator({
        collection: this.collection,
        page: this.options.page,
        for: 'news'
      });

      $('.news', this.el).append(container);
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
