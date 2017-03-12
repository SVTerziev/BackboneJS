/* jshint -W117 */
var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'news',
      'news(/)': 'news',
      'news/page/:page(/)': 'news',
      'news/:id(/)': 'newsDetails',
      'lectures(/)': 'lectures',
      'lectures/page/:page(/)': 'lectures',
      'lectures/:id(/)': 'lectureDetails',
      'search(/)': 'search',
      'search/page/:page(/)': 'search',
      'friends(/)': 'friends',
      'friends/page/:page(/)': 'friends',
      'admin': 'admin',
      ':page(/)': 'page',
      '*notFound': 'notFound'
    },
    currentView: null,
    initialize: function () {
      /* PRELOAD */
      var preloaderDelay = 450;
      var preloaderFadeOutTime = 500;
      var loadingAnimation = $('#loading-animation');
      var preloader = $('#preloader');

      loadingAnimation.fadeOut();
      preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
      /* END OF PRELOAD */

      /* HANDLE PUSHSTATE */
      $(document).on('click', 'a:not([data-bypass])', function(e) {
        e.preventDefault();
        var href = $(e.currentTarget).attr('href');
        $('nav li.nav-item').removeClass('active');
        if (e.currentTarget.classList.contains('nav-link')) {
          $(e.currentTarget).parent().addClass('active');
        }
        $(e.currentTarget).addClass('test');
        Backbone.history.navigate(href, { trigger: true });
      });
      /* END OF HANDLE PUSHSTATE */

      /* MENU */
      var menu = new App.Collections.Menu();
      var self = this;
      menu.fetch({
        success: function () {
          this.menu = new App.Views.Menu({
            collection: menu
          });
          $('.container').prepend(this.menu.el);

          this.menu.on('search', function (searchFor) {
            self.searchFor = searchFor;
            self.navigate('/search');
            self.search();
          });
        }
      });

      var $window = $(window);
      function adjustMenu() {
        if ($window.scrollTop() > 0) {
          $('.navbar').addClass('shrink');
          $('.dropdown-menu').addClass('adjust-submenu');
        } else {
          $('.navbar').removeClass('shrink');
          $('.dropdown-menu').removeClass('adjust-submenu');
        }
      }

      adjustMenu();
      $window.on('scroll', function () {
        adjustMenu();
      });
      /* END OF MENU */

      /* FOOTER */
      $('.container-fluid').html(new App.Views.Footer().el);
      /* END OF FOOTER */

      /* CALENDAR */
      moment.locale('bg');
      var eventsCollection = new App.Collections.Events();
      var $calendar = $('#calendar');
      eventsCollection.fetch({
        success: function (events) {
          var calendar = $calendar.calendar({
            template: $('#calendar-template').html(),
            events: events.toJSON(),
            multiDayEvents: {
              endDate: 'endDate',
              singleDay: 'startDate',
              startDate: 'startDate'
            },
            extras: {},
            clickEvents: {
              click: function(target) {
                if (target.events.length) {
                  var daysContainer = $calendar.find('.days-container');
                  daysContainer.toggleClass('show-events', true);
                  $calendar.find('.x-button').click(function() {
                    daysContainer.toggleClass('show-events', false);
                  });
                }
              }
            },
            adjacentDaysChangeMonth: true,
            forceSixRows: true
          });
        }
      });
      /* END OF CALENDAR */

      /* PAGES */
      this.pages = new App.Collections.Pages();
      /* END OF PAGES */
    },

    notFound: function () {
      this.navigate('/', { trigger: true });
    },

    admin: function () {
      var self = this;
      var news = new App.Collections.News();
      news.fetch({
        success: function () {
          var view = new App.Views.Admin({
            collection: news
          });

          self.showView(view);
        }
      });
    },

    friends: function (page) {
      var self = this;
      var page = page ? parseInt(page, 10) : 1;
      var friends = new App.Collections.Friends();
      var lectures = new App.Collections.Lectures();

      $.when(friends.fetch(), lectures.fetch()).then(function () {
        var view = new App.Views.Friends({
          collection: friends,
          lectures: lectures,
          page: page
        });

        self.showView(view);
      });
    },

    newsDetails: function (id) {
      var self = this;
      var news = new App.Collections.News();
      var lectures = new App.Collections.Lectures();

      $.when(news.fetch(), lectures.fetch()).then(function() {
        var view = new App.Views.ItemDetails({
          model: news.get(id),
          collection: lectures
        });

        self.showView(view);
      });
    },

    page: function (page) {
      var self = this;
      var lectures = new App.Collections.Lectures();
      this.pages.fetch({
        success: function (pages) {
          var model = _.find(pages.toJSON(), { 'link': '/' + page });

          if (model) {
            model = new App.Collections.Pages(model).models[0];
            lectures.fetch({
              success: function () {
                var view = new App.Views.ItemDetails({
                  model: model,
                  collection: lectures
                });

                self.showView(view);
              }
            })

          } else {
            self.navigate('/', {'trigger': true})
          }
        }
      })
    },

    lectureDetails: function (id) {
      var self = this;
      var lectures = new App.Collections.Lectures();
      lectures.fetch({
        success: function () {
          var view = new App.Views.ItemDetails({
            model: lectures.get(id),
            collection: lectures
          });

          self.showView(view);
        }
      });
    },

    news: function (page) {
      var self = this;
      var page = page ? parseInt(page, 10) : 1;
      var news = new App.Collections.News();
      var lectures = new App.Collections.Lectures();

      $.when(news.fetch(), lectures.fetch()).then(function () {
        var view = new App.Views.News({
          collection: news,
          lectures: lectures,
          page: page
        });

        self.showView(view);
      });
    },

    lectures: function (page) {
      var self = this;
      var page = page ? parseInt(page, 10) : 1;
      var lectures = new App.Collections.Lectures();
      lectures.fetch({
        success: function () {
          var view = new App.Views.Lectures({
            collection: lectures,
            page: page
          });

          self.showView(view);
        }
      });
    },

    search: function (page) {
      var self = this;
      var page = page ? parseInt(page, 10) : 1;
      var searchFor = this.searchFor || ' ';
      var view;
      var lectures = new App.Collections.Lectures();

      lectures.fetch({
        success: function () {
          if (searchFor) {
            var search = new App.Collections.Search([], { search: searchFor });
            search.fetch({
              success: function () {
                view = new App.Views.Search({
                  collection: search,
                  lectures: lectures,
                  page: page,
                  searchFor: searchFor
                });

                self.showView(view);
              }
            });
          } else {
            view = new App.Views.Search({
              collection: [],
              lectures: lectures,
              page: page,
              searchFor: searchFor
            });

            self.showView(view);
          }
        }
      });
    },

    showView: function (view) {
      if (this.currentView) {
        this.currentView.close();
      }
      this.currentView = view;

      $('.col-sm-9').html(this.currentView.el);
    }

  });

  utils.loadTemplates(['Menu', 'AdminNews', 'Friends', 'News', 'Lectures', 'Item', 'ItemDetails', 'Footer', 'RandomLecture', 'Search', 'Friend'], function () {
    new AppRouter();
    Backbone.history.start({ pushState: true, root: '/' });
  });

  return App;
}(App));
