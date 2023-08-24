const db = require('./client');

const createReview = async({title, body, showName, userName, timestamp}) => {
    try {
        const { rows } = await db.query(`
        INSERT INTO reviews( title, body, showName, userName, timestamp )
        VALUES($1, $2, $3, $4, $5)
        RETURNING *`,  [title, body, showName, userName, timestamp]);

        return rows;
    } catch (err) {
        throw err;
    }
}



module.exports = {createReview}