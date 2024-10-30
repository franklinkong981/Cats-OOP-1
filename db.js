/** Database setup for animal_oop_demo. */
const {Client} = require("pg");

let DB_URI = "postgres://franklinkong981:123456789@127.0.0.1:5432/animal_oop_demo";

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;