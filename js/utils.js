window.utils = {
  loadTemplates: function (views, callback) {
    var deferreds = [];

    $.each(views, function (index, view) {
      if (window.App.Views[view]) {
        deferreds.push($.get('/tpl/' + view + '.html', function (data) {
          window.App.Views[view].prototype.template = _.template(data);
        }));
      }
    });

    $.when.apply(null, deferreds).done(callback);
  }
};

Backbone.View.prototype.close = function () {
  this.remove();
  this.unbind();
}
