const Router = require('express');
const userRouter = Router();

userRouter.get("/", (req, res) => console.log("usernames will be logged here -wip"));
userRouter.get("/new", (req, res) => res.render("form"));
userRouter.post("/new", (req, res) => console.log("username to be saved: ", req.body.username));

module.exports = userRouter;