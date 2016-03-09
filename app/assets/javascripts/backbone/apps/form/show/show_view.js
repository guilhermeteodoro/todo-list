this.TodoList.module('FormApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  Show.FormView = Marionette.ItemView.extend({
    tagName: 'form',
    template: 'form/show/templates/form',

    ui: {
      errorText: 'span',
      taskInput: 'input[name=task]',
      submitButton: 'input[type=submit]'
    },

    triggers: {
      'submit' : 'form:submit'
    },

    events: {
      'click @ui.submitButton' : 'updateTitle',
      'blur @ui.taskInput' : 'updateTitle'
    },

    updateTitle: function() {
      this.model.set('title', this.ui.taskInput.val());

      if (!this.model.isValid()) {
        this.ui.errorText.text(
          'task ' + this.model.validationError
        );
      }
    },

    clearTaskInput: function() {
      this.ui.taskInput.val('');
    }
  });
});