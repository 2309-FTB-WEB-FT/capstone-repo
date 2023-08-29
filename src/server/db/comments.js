const db = require('./client');

const createComment = async({user, review, body, timestamp}) => {
    try {
        const { rows: [comment] } = await db.query(`
        INSERT INTO comments(userId, reviewId, body, timestamp)
        VALUES($1, $2, $3, $4)
        RETURNING *`,  [user, review, body, timestamp]);
        return comment
    } catch (err) {
        throw err;
    }
}

const getAllComments = async() => {
 
    try {
        
        const {rows} = await db.query(`
            SELECT * FROM comments;
        `);
        //console.log(rows)
        return rows;
    } catch (error) {
        throw error;
}}

const getCommentById = async(id) => {
    try {
        console.log('test')
        const {rows: [comment]} = await db.query(`
        SELECT * FROM comments
        WHERE id = $1
        `,[id])
        return comment;

    } catch (err) {
        next (err)
    }
}

const destroyComment = async(id) => {
    try {
        await client.query(`
        DELETE FROM comments 
        WHERE "commentId" = $1;
    `, [id]);
    const {rows: [comment]} = await client.query(`
        DELETE FROM comments
        WHERE id = $1
        RETURNING *
    `, [id]);
    return comment;

    } catch (err){ 
        next (err)
    }
}

module.exports = { createComment, getAllComments, getCommentById, destroyComment }