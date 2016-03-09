this.TodoList.module('TasksApp.List', function(List, App, Backbone, Marionette, $, _) {
  List.TaskView = Marionette.ItemView.extend({
    template: 'tasks/list/templates/task',

    ui: {
      checkbox: 'input[type=checkbox]',
      deleteButton: 'a',
      title: 'span'
    },

    events: {
      'click @ui.checkbox' : 'checkTask',
      'click @ui.title' : 'checkWithTitle',
      'click @ui.deleteButton' : 'deleteTask'
    },

    templateHelpers: {
      checkAttr: function() {
        return this.done ? 'CHECKED' : '';
      }
    },

    checkTask: function() {
      this.model.set('done', this.ui.checkbox.prop('checked') ? true : false);

      this.trigger('input:checked', this.model);
    },

    checkWithTitle: function() {
      this.ui.checkbox.prop('checked', !this.ui.checkbox.prop('checked'));

      this.checkTask();
    },

    deleteTask: function() {
      this.trigger('deleteButton:clicked');
    }
  });

  List.TaskCollectionView = Marionette.CollectionView.extend({
    tagName: 'form',
    childView: List.TaskView,
    comparator: function(task){
      return -task.get('created_at').getTime();
    },

    childEvents: {
      'input:checked' : 'onChildInputChecked',
      'deleteButton:clicked' : 'onChildDeleteButtonClicked'
    },

    onChildInputChecked: function(model) {
      this.trigger('task:select', model);
    },

    onChildDeleteButtonClicked: function(model) {
      this.trigger('task:delete', model);
    }
  });
});