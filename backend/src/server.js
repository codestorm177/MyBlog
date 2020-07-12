import express from 'express';
import bodyParser from 'body-parser';
const sqlite3 = require('sqlite3');
const app = express();

app.use(bodyParser.json());



let db = new sqlite3.Database('../db.sqlite');


app.get('/api/articles/:name', (req, res, next) => {
    const articleName = req.params.name;
    db.get("SELECT * FROM Articles WHERE name = $articleName", {$articleName: articleName}, (err, row) => {
        if (err) {
            next(err);
        }
        else if (row) {
            res.status(200).send(row)
        }
        else {
            res.status(404).send();
        }
    });   
    
});


app.post('/api/articles/:name/upvote', (req, res, next) => {
    const articleName = req.params.name;

    db.get("SELECT * FROM Articles WHERE name=$articleName", {$articleName: articleName}, (err, row) => {
        if (err) {
            next(err);
        }
        else if (!row) {
            res.status(400).send()
        }
        else {
            db.run("UPDATE Articles SET upvotes = $upvotes WHERE name=$articleName", {
                $upvotes: row.upvotes + 1,
                $articleName: articleName
            }, function(err) {
                if (err) {
                    next(err);
                }
                else {
                    db.get("SELECT * FROM Articles WHERE name=$articleName", {$articleName: articleName}, (err, row) => {
                        if (err) {
                            next(err);
                        }
                        else {
                            res.status(200).send(row);
                        }
                    });
                }
            });
        }
    });

});

app.post('/api/articles/:name/comment', (req, res, next) => {
    const articleName = req.params.name;
    const { username, text } = req.body;

    db.get("SELECT * FROM Articles WHERE name = $articleName", {$articleName: articleName}, (err, row) => {
        if (err) {
            next(err);
        }
        else if (!row) {
            res.status(400).send();
        }
        else {
            let commentArray = JSON.parse(row.comments);
            commentArray.push({username, text});
            console.log(commentArray);
            
            db.run("UPDATE Articles SET comments = $commentArray WHERE name = $articleName" , {
                $commentArray: JSON.stringify(commentArray),
                $articleName: articleName
            }, function(err) {
                if (err) {
                    next(err);
                }
                else {
                    db.get("SELECT * FROM Articles WHERE name = $articleName", {$articleName: articleName}, (err, row) => {
                        if (err) {
                            next(err);
                        }
                        else {
                            res.status(200).send(row);
                        }
                    });
                }
            });
            
        }
    });

});

app.listen(8000, () => console.log("Listening on PORT 8000."));