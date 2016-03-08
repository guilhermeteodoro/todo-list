this.TodoList.module('TasksApp.List', function(List, App, Backbone, Marionette, $, _) {
  List.TaskView = Marionette.ItemView.extend({
    template: 'tasks/list/templates/task',
  });

  List.TaskCollectionView = Marionette.CollectionView.extend({
    tagName: 'form',
    childView: List.TaskView
  });
});