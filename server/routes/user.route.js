const UserController = require("../controllers/user.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = app => {
    app.get("/api/users", UserController.findAllUsers);
    app.get("/api/users/:id", UserController.findOneUser);
    app.put("/api/users/update/:id", UserController.updateUsers);
    app.post("/api/users/register", UserController.Create);
    app.post("/api/login", UserController.Login);
    app.delete("/api/users/delete/:id", UserController.deleteUser);
 
};