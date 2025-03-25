const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  console.log(rows);
  return rows;
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ('" + username + "')");
}

module.exports = {
  getAllUsernames,
  insertUsername
};