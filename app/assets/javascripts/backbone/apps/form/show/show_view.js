this.TodoList.module('FormApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  Show.FormView = Marionette.ItemView.extend({
    template: 'form/show/templates/form',

    ui: {
      taskInput: 'input[name=task]',
      submitButton: 'input[type=submit]'
    }
  });
});