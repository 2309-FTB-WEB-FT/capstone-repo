const express = require('express');
const { getUser } = require('../db');
const { createComment, getAllComments } = require('../db/comments');
const router = express.Router();

router.post('./comment', async (req, res, next) => {
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
router.get('./', async( req, res, next) => {
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