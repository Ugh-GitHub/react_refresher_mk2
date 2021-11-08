const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get(`/`, (req, res) => {
  console.log("In Get request");
  const queryText = `SELECT * FROM genres;`;
  
  // return all genres
  
  pool.query(queryText).then( (result) => {
        // if the query to the DB is successful, send back the rows from the results object
        console.log("the results for the genre are", result.rows);  
        res.send(result.rows);
      })
      .catch( (error) => {
        //Otherwise, pass back a 500 error code and available details
          console.log(`Error on query ${error}`);
          res.sendStatus(500);
      });
});

module.exports = router;