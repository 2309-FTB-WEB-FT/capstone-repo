const express = require('express');
const { getUser } = require('../db');
const { createComment, getAllComments } = require('../db/comments');
const commentRouter = express.Router();

commentRouter.post('./comment', async (req, res, next) => {
    try {
        const comment = await createComment(req.body);
        const existingShow = await getVideoGameById(show.id);
        const user = await getUser(user.id)
        if (existingShow) {
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

commentRouter.get('/comments', async( req, res, next) => {
    console.log('uhhhhh')
    try {
        console.log("hellop?")
        const comments  = await getAllComments(req.body);

        res.send({
            comments
        });
    } catch (err) {
        next(err)
    }
});