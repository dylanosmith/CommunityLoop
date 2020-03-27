const TaskController = require("../controllers/task.controller")

module.exports = app => {
    app.get("/api/tasks", TaskController.findAlltasks);
    app.get("/api/tasks/:id", TaskController.findOneTask);
    app.put("/api/tasks/update/:id", TaskController.updateTasks);
    app.post("/api/tasks/new", TaskController.Create);
    app.delete("/api/tasks/delete/:id", TaskController.deleteTask);
 
};