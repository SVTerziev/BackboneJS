var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Views.Friends = Backbone.View.extend({
    className: 'card-columns',
    initialize: function (options) {
      _.bindAll(this, 'render')
      //this.listenTo(this.collection, 'sync', this.render);
      this.listenTo(this.collection, 'reset', this.render);;
      this.options = options;
      this.childViews = [];
      this.render();
    },
    render: function () {
      var perPage = 6;
      var friendsFrom = (this.options.page - 1) * perPage;
      var friendsTo = Math.min(friendsFrom + perPage, this.collection.length);
      var lectures = this.options.lectures;

      var randomLectureId = _.random(0, lectures.length - 1);
      var container = document.createDocumentFragment();
      var friend,
          randomLecture,
          pagination;

      this.$el.html(this.template());
      for (var i = friendsFrom; i < friendsTo; i++) {
        friend = new App.Views.Friend({
          model: this.collection.models[i],
        });
        container.appendChild(friend.el);
        this.childViews.push(friend);
      }

      randomLecture = new App.Views.RandomLecture({
        model: lectures.models[randomLectureId]
      });
      pagination = new App.Views.Paginator({
        collection: this.collection,
        page: this.options.page,
        for: 'friends'
      });

      $('.friends', this.el).append(container);
      $('.random-lecture').html(randomLecture.el);
      $('nav.card-footer', this.el).append(pagination.el);

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

  App.Views.Friend = Backbone.View.extend({
    className: 'card',
    events: {
      'click .show-more': 'showMore'
    },
    showMore: function (e) {
      var height;
      var state = this.model.get('state');
      var text = {
        showMore: 'Повече',
        showLess: 'По-малко'
      };
      var $currentTarget = $(e.currentTarget);
      if (!state) {
        $currentTarget.text(text.showLess);
        $currentTarget
        .parent()
        .parent()
        .parent()
        .parent()
        .parent().addClass('selected');
        height = $('p.card-text', this.el).get(0).scrollHeight;
      } else {
        $currentTarget.text(text.showMore);
        $currentTarget
        .parent()
        .parent()
        .parent()
        .parent()
        .parent().removeClass('selected');
        height = '7rem';
      }
      $('p.card-text', this.el).animate({
        height: height
      }, 1000);
      this.model.set('state', !state);
      return false;
    },
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
