const express = require('express');
const app = express();
const portfolioRouter = require('./routes/portfolio.router.js');
const contactRouter = require('./routes/contact.router.js');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/portfolio', portfolioRouter);
app.use('/api/contact', contactRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});