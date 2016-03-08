this.TodoList.module('TasksApp.List', function(List, App, Backbone, Marionette, $, _) {
  List.Controller = App.Controllers.Application.extend({
    initialize: function() {
      var _this = this,
          tasks = App.request('tasks:entities');

      App.execute('when:fetched', tasks, function() {
        window.foo = tasks;

        var view = _this.getTaskCollectionView(tasks);

        _this.listenTo(view, 'task:selected', function(args) {
          args.model.save();
        });

        _this.show(view, { region: App.tasksRegion });
      });
    },

    getTaskCollectionView: function(tasks) {
      return new List.TaskCollectionView({ collection: tasks });
    }
  });
});