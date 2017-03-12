var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Views.Search = Backbone.View.extend({
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
      var results = this.collection.length;
      var searchFrom = (this.options.page - 1) * perPage;
      var searchTo = Math.min(searchFrom + perPage, results);

      var randomResult = _.random(0, this.options.lectures.length - 1);
      var container = document.createDocumentFragment();
      var singleResult,
          randomLecture,
          pagination;

      this.$el.html(this.template({ searchFor: this.options.searchFor }));

      randomLecture = new App.Views.RandomLecture({
        model: this.options.lectures.models[randomResult]
      });
      $('.random-lecture').html(randomLecture.el);
      this.childViews.push(randomLecture);

      if (results > 0) {
        for (var i = searchFrom; i < searchTo; i++) {
          singleResult = new App.Views.Item({
            model: this.collection.models[i],
            itemFor: this.collection.models[i].get('searchFor')
          });
          container.appendChild(singleResult.el);
          this.childViews.push(singleResult);
        }

        pagination = new App.Views.Paginator({
          collection: this.collection,
          page: this.options.page,
          for: 'search'
        });

        $('.searchFor', this.el).append(container);
        $('.card-footer', this.el).html(pagination.el);

        this.childViews.push(pagination);
      } else {
        $('.searchFor').append('<div class="card-block no-results"><h4 class="card-title text-xs-center">Няма резултати</h4></div>');
      }
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
