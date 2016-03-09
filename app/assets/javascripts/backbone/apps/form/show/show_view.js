this.TodoList.module('FormApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  Show.FormView = Marionette.ItemView.extend({
    tagName: 'form',
    template: 'form/show/templates/form',

    ui: {
      taskInput: 'input[name=task]',
      submitButton: 'input[type=submit]'
    },

    triggers: {
      'submit' : 'form:submit'
    },

    events: {
      'click @ui.submitButton' : 'updateTitle'
    },

    updateTitle: function() {
      this.model.set('title', this.ui.taskInput.val());
    },

    clearTaskInput: function() {
      this.ui.taskInput.val('');
    }
  });
});