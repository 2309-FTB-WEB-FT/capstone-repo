const express = require('express');
const reviewRouter = express.Router();
const { getAllReviews, getReviewById, createReview, destroyReview, getReviewByShow, getReviewByUser } = require('../db/reviews')
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

reviewRouter.get('/review/:showname', async( req, res, next) => {
    try {
        const reviewByShow = await getReviewByShow(req.params.id)
        res.send(reviewByShow)

    } catch(err) {
        next(err)
    }
})

reviewRouter.get('/review/:username', async( req, res, next) => {
    try {
        const reviewByUser = await getReviewByUser(req.params.id)
        res.send(reviewByUser)
    } catch(err) {
        next(err)
    }
})

reviewRouter.post('/post', requireUser, async( req, res, next) => {
      const newReview = req.body
      newReview.userName = req.user.id
      //console.log('line 36', newReview)
    try {
        const review = await createReview(newReview);
        res.send(review);

        
    } catch(err) {
        next(err)
    }
});

reviewRouter.delete('/:id', async(req, res, next) => {
    try {
        const {reviewId} = req.params
        const reviewToUpdate = await getReviewById(reviewId)
        
        if(!reviewToUpdate) {

        } else {
            const deletedReview = await destroyReview(reviewId)
            res.send({success: true, ...deletedReview});}
    } catch (err) {
        next(err)
    }
})


reviewRouter.patch

module.exports = reviewRouter