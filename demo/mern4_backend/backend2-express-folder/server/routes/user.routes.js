// const UserController = require("./../controllers/user.controller")
const UserController = require("./../controllers/user2.controller")



module.exports = (app) => {
    app.get("/api/users", UserController.allUsers)
    app.get("/api/users/:id", UserController.oneUser)
    app.post("/api/users", UserController.addUser)
    app.put("/api/users/:id", UserController.updateUser)
    app.delete("/api/users/:id", UserController.deleteUser)

}


