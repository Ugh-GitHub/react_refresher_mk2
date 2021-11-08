const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id;
    const createdMovieTitle = req.body.title;

    // Depending on how you make your junction table, this insert COULD change.
    const insertMovieGenreQuery = `
      INSERT INTO "movie_genres" ("movie_id", "title", "genre_id")
      VALUES  ($1, $2, $3);
      `
      // SECOND QUERY MAKES GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, createdMovieTitle, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

// Added 9:20 PM 11/5/2020
router.get(`/`, (req, res) => {
  console.log("In Get request");
  const queryText = `SELECT * FROM movies;`;
  
  // return all movies
  
  pool.query(queryText).then( (result) => {
        // if the query to the DB is successful, send back the rows from the results object
          res.send(result.rows);
      })
      .catch( (error) => {
        //Otherwise, pass back a 500 error code and available details
          console.log(`Error on query ${error}`);
          res.sendStatus(500);
      });
});

module.exports = router;