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
        console.log('i...am trying')
        const {rows} = await db.query(`
            SELECT * FROM comments;
        `);
        //console.log(rows)
        return rows;
    } catch (error) {
        throw error;
}}

module.exports = { createComment, getAllComments }