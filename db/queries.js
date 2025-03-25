const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ('" + username + "')");
}

async function searchUsername(searchedUser) {
    const searchResults = await pool.query("SELECT * FROM usernames WHERE username LIKE $1", ['%' + searchedUser + '%'])
    return searchResults.rows;
}

async function deleteUsername(username) {
    await pool.query("DELETE FROM usernames WHERE username = $1", [username])
}

module.exports = {
  getAllUsernames,
  insertUsername,
  searchUsername,
  deleteUsername
};

// what did I learn from this hour of trial and error:
// .rows is where the useful values are stored
// use $1, $2, $3, which are replaced in the SQL corresponding to the position in the array, that you provide as the 2nd argument
// don't forget %
// brush up on forEach/map, OR just stick to trusty for loops lol