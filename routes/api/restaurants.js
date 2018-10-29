const express = require('express');
const router = express.Router();
const mongo = require('mongodb')
const Restaurant = require('../../models/Restaurant');


//@router   POST api/items
//@desc     Get all restaurants
router.get('/', (req, res) => {
    console.log("called get");
    Restaurant
        .find()
        .limit(100)
        .then(restaurants => res.json(restaurants));
});

router.get('/count', (req, res) => {

    Restaurant.estimatedDocumentCount((err, count) => {
        if (err) {
            return;
        } else {
            res.json(count);
        }
    });
})
//@router   GET api/items
//@desc     Get a restaurant
router.get('/:id', (req, res) => {
    Restaurant
        .findById(req.params.id)
        .then(restaurant => res.json(restaurant));
});

router.delete('/:id', (req, res) => {

    // Restaurant
    //     .findById(req.params.id)
    //     .then(restaurant => restaurant.remove().then(() => res.json({success})))
    //     .catch(err => res.status(404).json(false));
    var id = req.params.id;
    Restaurant.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
    });
    res.json({ success: id })
});

module.exports = router;