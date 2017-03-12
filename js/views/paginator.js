/* jshint -W117 */
var App = window.App || {
  Views: {},
  Models: {},
  Collections: {}
};

(function (App) {
  App.Views.Paginator = Backbone.View.extend({
    tagName: 'ul',
    initialize: function (options) {
      this.listenTo(this.collection, 'reset', this.render);
      this.options = options;
      this.render();
    },
    render: function () {
      var perPage = 5;
      var items = this.collection;
      var len = items.length;
      var pageCount = Math.ceil(len / perPage);
      var paginationFor = this.options.for;

      this.$el.twbsPagination({
        totalPages: pageCount,
        visiblePages: 7,
        href: '/' + paginationFor + '/page/{{page}}'
      });

      return this;
    },
    close: function () {
      this.remove();
      this.unbind();
    }
  });

  return App;
}(App));
