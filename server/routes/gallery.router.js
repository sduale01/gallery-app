const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
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
    const queryText =  `UPDATE "images" SET "likes" = "likes" + 1
                        WHERE "id"=$1`
    pool.query(queryText, [req.params.id]).then(response => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in PUT ', error);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "images" ORDER BY "id"`
    pool.query(queryText).then(response => {
        res.send(response.rows)
    }).catch(error => {
        console.log('error in /GET', error);
        res.sendStatus(500);
    });
    
}); // END GET Route

// DELETE ROUTE
router.delete('/:id', (req,res) => {
    const queryText = `DELETE FROM "images" WHERE "id" = $1`
    pool.query(queryText, [req.params.id]).then(response => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in DELETE', error);
        res.sendStatus(500);
    });
})// END OF DELETE ROUTE

router.post('/', (req, res) => {
    const queryText = `INSERT INTO "images" ("path","description")
                        VALUES ($1, $2)`
    pool.query(queryText, [req.body.imageUrl, req.body.imageDescription]).then(response => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('error in POST', error);
        res.sendStatus(500);
    })
})

module.exports = router;