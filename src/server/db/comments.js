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

module.exports = { createComment }