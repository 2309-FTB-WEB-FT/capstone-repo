/*const express = require('express');


const { getUserById } = require('../db/users');

const { createComment, getAllComments, getCommentById, destroyComment } = require('../db/comments');
const { getReviewById } = require('../db/reviews');
const commentRouter = express.Router();



commentRouter.post('/', getUser, async (req, res, next) => {
    console.log('hello')
        
        try {
            const parsedToken = jwt.verify(token, process.env.JWT_SECRET);
            const comment = await createComment(req.body);
            const user = await getUserById(parsedToken.id);
            const existingShow = await getReviewById(review.id);
      
            if (user) {
                req.user = user; 
                console.log(`LOOKING GOOD: ${JSON.stringify(req.user)}`);
                next();
         
      
     
            res.send(comment)
        } else {
            next({
                name: 'createComment Error',
                message: 'There was an error creating the comment'
            });
        }

    } catch(err) {
        next(err);
    }
    
});


// /api/comments
commentRouter.get('/', async( req, res, next) => {
  
    try {
        
        const comments  = await getAllComments(req.body);


        res.send({
            comments
        });
    } catch ({err}) {
        next(err)
    }
});

commentRouter.get('/:id', async( req, res, next) => {
    try {
        console.log('yes')
        const id = await getCommentById(req.params.id);
        res.send(id)
    } catch (err) {
        next(err)
    }
})

commentRouter.delete('/:id', async(req, res, next) => {
    try {
        const {commentId} = req.params
        const commentToUpdate = await getCommentById(commentId)
        
        if(!commentToUpdate) {

        } else {
            const deletedComment = await destroyComment(commentId)
            res.send({success: true, ...deletedComment});}
    } catch (err) {
        next(err)
    }
})

module.exports = commentRouter*/