const Router = require('express');
const userController = require('../controllers/userController')
const userRouter = Router();

userRouter.get("/", (req, res) => res.render("index"));
userRouter.get("/new", userController.createUsernameGet);
userRouter.post("/new", userController.createUsernamePost);
userRouter.get("/show", userController.getUserNames);
userRouter.get("/search", userController.searchUserPageGet);
userRouter.get("/searchUser", userController.searchUserGet);
userRouter.post("/delete", userController.deleteUserPost);
userRouter.get("/delete", userController.deleteUserPageGet);

module.exports = userRouter;