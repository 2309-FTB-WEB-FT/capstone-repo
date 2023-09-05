/*const db = require('./client');


const createComment = async({user, review, body}) => {
    try {
        const { rows: [comment] } = await db.query(`
        INSERT INTO comments(userId, reviewId, body)
        VALUES($1, $2, $3)
        RETURNING *`,  [user, review, body]);
        return comment
    } catch (err) {
        throw err;
    }}

const getAllComments = async() => {

    try {
        
        const {rows} = await db.query(`
            SELECT * FROM comments
        `);
        if(!rows) {
            return;
        }
        console.log(rows)
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

module.exports = { createComment, getAllComments, getCommentById, destroyComment }*/