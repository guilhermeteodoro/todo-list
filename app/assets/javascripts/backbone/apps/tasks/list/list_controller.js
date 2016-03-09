this.TodoList.module('TasksApp.List', function(List, App, Backbone, Marionette, $, _) {
  List.Controller = App.Controllers.Application.extend({
    initialize: function() {
      this.tasks = App.request('tasks:entities');

      var _this = this;

      App.execute('when:fetched', this.tasks, function() {
        var view = _this.getTaskCollectionView(_this.tasks);

        _this.listenTo(view, 'task:select', function(args) {
          args.model.save();
        });

        _this.listenTo(view, 'task:delete', function(args) {
          args.model.destroy();
        });

        _this.show(view, { region: App.tasksRegion });
      });
    },

    getTaskCollectionView: function(tasks) {
      return new List.TaskCollectionView({ collection: tasks });
    },

    addTaskToCollection: function(task) {
      this.tasks.add(task);
    }
  });
});