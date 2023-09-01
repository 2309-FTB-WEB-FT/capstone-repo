const express = require('express');
const reviewRouter = express.Router();
const { getAllReviews, getReviewById, createReview, } = require('../db/reviews')
const { getUserById } = require('../db/users')
const {requireUser} = require('./utilis')

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

reviewRouter.post('/', requireUser, async( req, res, next) => {
      const newReview = req.body
      newReview.userName = req.user.name
      console.log('line 36', newReview)
    try {
        const review = await createReview(newReview);
        res.send(review);

        
    } catch(err) {
        next(err)
    }
});

reviewRouter.delete

reviewRouter.patch

module.exports = reviewRouter