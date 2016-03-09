this.TodoList.module('FormApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  Show.Controller = App.Controllers.Application.extend({
    initialize: function() {
      this.view = this.getFormView();

      var _this = this;

      this.listenTo(this.view, 'form:submit', function(args) {
        // TODO: Validates model before save
        args.model.save('', '', {
          success: function(model) {
            App.vent.trigger('task:inserted', { model: model });

            _this.view.clearTaskInput();
            _this.view.model = new App.Entities.Task;
          }
        });
      });

      this.show(this.view, { region: App.formRegion });
    },

    getFormView: function(task) {
      return new Show.FormView({ model: new App.Entities.Task });
    }
  });
});