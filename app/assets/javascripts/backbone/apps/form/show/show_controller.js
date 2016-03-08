this.TodoList.module('FormApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  Show.Controller = App.Controllers.Application.extend({
    initialize: function() {
      var _this = this,
          task = App.request('task:entity');

      App.execute('when:fetched', task, function() {
        var view = _this.getFormView(task);

        _this.listenTo(view, 'form:submit', function(args) {
          args.model.save();
        });

        _this.show(view, { region: App.formRegion });
      });
    },

    getFormView: function(task) {
      return new Show.FormView({ model: task });
    }
  });
});