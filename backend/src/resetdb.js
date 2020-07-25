const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('db.sqlite');

db.serialize(() => {
    db.run("DROP TABLE IF EXISTS Articles");
    db.run("DROP TABLE IF EXISTS Users")
})

