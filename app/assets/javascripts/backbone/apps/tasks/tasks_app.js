this.TodoList.module('TasksApp', function(TasksApp, App, Backbone, Marionette, $, _) {
  this.startWithParent = false;
  this.listController = null;

  var API = {
    list: function() {
      if (!this.listController) { this.listController = new TasksApp.List.Controller; }
      return this.listController;
    },
    updateList: function(task) {
      this.listController.addTaskToCollection(task);
    }
  };

  TasksApp.on('start', function() {
    return API.list();
  });

  App.vent.on('task:inserted', function(args) {
    API.updateList(args.model);
  });
});