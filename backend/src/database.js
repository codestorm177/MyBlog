const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./db.sqlite');

db.serialize( () => {
    db.run("CREATE TABLE IF NOT EXISTS Articles (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, upvotes INTEGER NOT NULL, comments TEXT NOT NULL)");

    db.run("INSERT OR IGNORE INTO Articles (name, upvotes, comments) VALUES ($name, $upvotes, $comments)", {
        $name: 'learn-react',
        $upvotes: 0,
        $comments: JSON.stringify([])
    });

    db.run("INSERT OR IGNORE INTO Articles (name, upvotes, comments) VALUES ($name, $upvotes, $comments)", {
        $name: 'learn-node',
        $upvotes: 0,
        $comments: JSON.stringify([])
    });

    db.run("INSERT OR IGNORE INTO Articles (name, upvotes, comments) VALUES ($name, $upvotes, $comments)", {
        $name: 'my-thoughts-on-resumes',
        $upvotes: 0,
        $comments: JSON.stringify([])
});
});


