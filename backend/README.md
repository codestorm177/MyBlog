## Backend 

### Database
The database is stored in `db.js`.  There are two tables, one represents the articles and houses information such as the article name, number of upvotes, and comments on each article.  The other represents the users, such as the login information and the articles that each user has already upvoted.

### src
`resetdb.js`: Resets the database.  Deletes the Users table and the Articles table.

`database.js`: Populates the database with Articles having 0 upvotes and 0 comments, and Users having some users.

`server.js`: Responsible for handling the requests that updates the frontend React State and the Database file.  Implemented using Express.js.