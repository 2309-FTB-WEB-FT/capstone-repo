const express = require('express');
const reviewRouter = express.Router();
const { getAllReviews } = require('../db/reviews')

reviewRouter.get('/', async( req, res, next) => {
  
    try {
        
        const reviews  = await getAllReviews(req.body);

        res.send({
            reviews
        });
    } catch (err) {
        next(err)
    }
});

reviewRouter.post

reviewRouter.delete

reviewRouter.patch

module.exports = reviewRouter