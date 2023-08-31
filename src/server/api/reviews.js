const express = require('express');
const reviewRouter = express.Router();
const { getAllReviews, getReviewById, createReview, postReview } = require('../db/reviews')
const { getUserById } = require('../db/users')

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

reviewRouter.get('/review/:id', async( req, res, next) => {
    try {

        const id = await getReviewById(req.params.id)
        res.send(id)

    } catch (err) {
        next(err)
    }
});

reviewRouter.post('/', async( req, res, next) => {
      const { title, body } = req.body
    try {
        
        //const user = await getUserById(parsedToken.id);

        const review = await postReview(id);
        const newReview = await review
        res.send(newReview);

        
    } catch(err) {
        next(err)
    }
});

reviewRouter.delete

reviewRouter.patch

module.exports = reviewRouter