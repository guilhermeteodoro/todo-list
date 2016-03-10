this.TodoList.module('FormApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  Show.FormView = Marionette.ItemView.extend({
    template: 'form/show/templates/form',
    tagName: 'form',
    className: 'form',

    ui: {
      errorText: 'p',
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
        this.$el.addClass('form--with-error');

        this.ui.errorText.text(
          '*task ' + this.model.validationError
        );
      } else {
        this.$el.removeClass('form--with-error');
        this.ui.errorText.text('');
      }
    },

    clearTaskInput: function() {
      this.ui.taskInput.val('');
    }
  });
});