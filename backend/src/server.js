import express from 'express';
import bodyParser from 'body-parser';
import sqlite3 from 'sqlite3';
const app = express();

app.use(bodyParser.json());



app.get('/api/articles/:name', (req, res) => {
    const articleName = req.params.name;   

    
});


app.post('/api/articles/:name/upvote', (req, res) => {
    articleName = req.params.name;

    articlesInfo[articleName].upvotes += 1;

    res.status(200).send(`${articleName} has ${articlesInfo[articleName].upvotes} upvotes.`)

});

app.post('/api/articles/:name/comment', (req, res) => {
    articleName = req.params.name;
    const { username, text } = req.body;

    articlesInfo[articleName].comments.push({ username, text });

    res.status(200).send(`${articlesInfo[articleName]}`);
})

app.listen(8000, () => console.log("Listening on PORT 8000."));