const express = require('express');
const reviewRouter = express.Router();
const { getAllReviews } = require('../db/reviews')
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

reviewRouter.post('/', async( req, res, next) => {
      const { title, body } = req.body
    try {
        const parsedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await getUserById(parsedToken.id);
    
         if(user) {
                const token = jwt.sign({
                    id: user.id,
                    email: user.email
                }, process.env.JWT_SECRET, {
                    expiresIn: '1w'
                });
    
                res.send({
                
                });}

        
    } catch(err) {
        next(err)
    }
});

reviewRouter.delete

reviewRouter.patch

module.exports = reviewRouter