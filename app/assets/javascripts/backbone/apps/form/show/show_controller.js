this.TodoList.module('FormApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  Show.Controller = App.Controllers.Application.extend({
    initialize: function() {
      var view = this.getFormView();

      this.listenTo(view, 'form:submited', (function(_this){
        console.log(_this, 'form:submitted');
      })(this));

      this.show(view, { region: App.formRegion });
    },

    getFormView: function() {
      return new Show.FormView;
    }
  });
});