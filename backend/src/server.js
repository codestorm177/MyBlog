import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import e from 'express';
const sqlite3 = require('sqlite3');

const app = express();


app.use(bodyParser.json());

let db = new sqlite3.Database('db.sqlite');

app.get('/api/articles', (req, res, next) => {
    db.all("SELECT * FROM Articles", (err, rows) => {
        if (err) {
            next(err);
        }
        else if (rows) {
            res.status(200).send(rows);
        }
        else {
            res.status(400).send()
        }
    });
});

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

app.get('/api/:user/login', (req, res, next) => {
    const user = req.params.user;
    db.get("SELECT * FROM Users where username = $user", {$user: user}, (err, row) => {
        if (err) {
            next(err);
        }
        else if (!row) {
            res.status(204).send()
        }
        else {
            res.status(200).send(row)
        }
    })
})


app.post('/api/articles/:name/upvote', (req, res, next) => {
    const articleName = req.params.name;
    if (!req.query.username) {
        res.status(400).send({message: "Must login to comment"})
    }

    db.get("SELECT * FROM Users WHERE username=$username", {$username: req.query.username}, (err, row) => {
        if (err) {
            next(err);
        }
        else if (!row) {
            res.status(400).send()
        }
        else {
            const upvote_ids = JSON.parse(row.upvote_ids); //list of all the article_ids that the user has upvoted
            console.log(upvote_ids)
            

            db.get("SELECT * FROM Articles WHERE name=$articleName", {$articleName: articleName}, (err, row) => {
                if (err) {
                    next(err);
                }
                else if (!row) {
                    res.status(400).send()
                }
                else {                    
                    const index = upvote_ids.findIndex((element) => row.id == element) //find out if the article has been upvoted
                    const numUpvotes = row.upvotes;

                    if (index !== -1) {
                        res.status(200).send(row);
                    }

                    if (index === -1) {
                        upvote_ids.push(row.id);  
                        console.log(upvote_ids)                      
                        
                        db.run("UPDATE Articles SET upvotes = $upvotes WHERE name=$articleName", { //update number of upvotes on article
                            $upvotes: numUpvotes + 1,
                            $articleName: articleName
                        }, function(err) {
                            if (err) {
                                next(err);
                            }
                            else {
                                db.run("UPDATE Users SET upvote_ids=$upvote_ids WHERE username=$username", {$upvote_ids: JSON.stringify(upvote_ids), $username: req.query.username}, function(err) {
                                    if (err) {
                                        next(err);
                                    }
                                    else {
                                        db.get("SELECT * FROM Articles WHERE name=$articleName", {$articleName: articleName}, (err, row) => {
                                            if (err) {
                                                next(err);
                                            }
                                            else {
                                                res.status(200).send(row)
                                            }
                                        });

                                    }
                                });                                
                            }
                        });
                    }                    
                }
            })
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

app.post('/api/register', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const upvote_ids = JSON.stringify([])

    db.get("SELECT * FROM Users WHERE username = $username AND password = $password", {$username: username, $password: password}, (err, row) => {
        if (err) {
            next(err);
        }
        else if (row) {
            res.status(409).send()
        }
        else {
            db.run("INSERT INTO Users (username, password, upvote_ids) VALUES ($username, $password, $upvote_ids)", {$username: username, $password: password, $upvote_ids: upvote_ids}, function(err) {
                if (err) {
                    next(err);
                }
                else {
                    res.status(200).send()
                }
            });
        }        
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(8000, () => console.log("Listening on PORT 8000."));