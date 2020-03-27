const UserController = require("../controllers/user.controller")

module.exports = app => {
    app.get("/api/users", UserController.findAllUsers);
    app.get("/api/users/:id", UserController.findOneUser);
    app.put("/api/users/update/:id", UserController.updateUsers);
    app.post("/api/users/new", UserController.Create);
    app.delete("/api/users/delete/:id", UserController.deleteUser);
 
};