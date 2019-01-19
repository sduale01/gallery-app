const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool({
    database: 'image-gallery',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 10000
});


// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const queryText =  `UPDATE "images" SET "likes" += 1
                        WHERE "id"=$1`
    pool.query(queryText, [req.params.id]).then(response => {

    }).catch(error => {
        console.log('error in PUT ', error);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "images"`
    pool.query(queryText).then(response => {
        res.send(response.rows)
    }).catch(error => {
        console.log('error in /GET', error);
        res.sendStatus(500);
    });
    
}); // END GET Route

module.exports = router;