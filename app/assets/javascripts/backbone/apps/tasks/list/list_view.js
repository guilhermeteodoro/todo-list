this.TodoList.module('TasksApp.List', function(List, App, Backbone, Marionette, $, _) {
  List.TaskView = Marionette.ItemView.extend({
    template: 'tasks/list/templates/task',

    ui: {
      checkbox: 'input[type=checkbox]',
      title: 'span'
    },

    events: {
      'click @ui.checkbox' : 'checkTask',
      'click @ui.title' : 'checkWithTitle',
    },

    templateHelpers: {
      check: function() {
        return this.done ? 'CHECKED' : '';
      }
    },

    checkTask: function() {
      this.model.set('done', this.ui.checkbox.prop('checked') ? true : false);

      this.trigger('input:check', this.model);
    },

    checkWithTitle: function() {
      this.ui.checkbox.prop('checked', !this.ui.checkbox.prop('checked'));

      this.checkTask();
    }
  });

  List.TaskCollectionView = Marionette.CollectionView.extend({
    tagName: 'form',
    childView: List.TaskView,

    childEvents: {
      'input:check' : 'taskSelected'
    },

    taskSelected: function(model) {
      this.trigger('task:selected', model);
    }
  });
});