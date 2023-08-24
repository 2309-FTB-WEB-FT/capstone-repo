const db = require('./client');

const createReview = async({title, body, show}) => {
    try {
        const { rows: [ review ] } = await db.query(`
        INSERT INTO reviews(title, body, show)
        VALUES($1, $2, $3)
        RETURNING *`,  [title, body, show]);

        return review;
    } catch (err) {
        throw err;
    }
}

module.exports = {createReview}