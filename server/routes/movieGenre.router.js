const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get(`/:id`, (req, res) => {
    console.log("In Get request with", req.params.id);
    const queryText = `SELECT "name" FROM genres
                        JOIN movie_genres ON movie_genres.genre_id = genres.id
                        WHERE movie_genres.movie_id = $1;`;
    const getID = Number(req.params.id);

    // return all movies
    
    pool.query(queryText, [getID]).then( (result) => {
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