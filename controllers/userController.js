const db = require('../db/queries');

async function getUserNames(req, res) {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function createUsernameGet(req, res) {
    res.render("form")
}

async function createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}

async function searchUserGet(req, res) {
    const result = await db.searchUsername(req.query.user);
    console.log(result);
    res.render("searchResult", { users: result })
}

function searchUserPageGet(req, res) {
    res.render("searchForm")
}

module.exports = {
    getUserNames,
    createUsernameGet,
    createUsernamePost,
    searchUserGet,
    searchUserPageGet
  };