const db = require('./client')

const createShow = async({ name, genre, image, description, averageLength }) => {
    try {
        const { rows: [show ] } = await db.query(`
        INSERT INTO shows(name, genre, image, description, averageLength)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *`,  [name, genre, image, description, averageLength]);

        return show;
    } catch (err) {
        throw err;
    }
}

router.get('/', async (req, res, next) => {
    try {
        const show = await getAllShows();
        res.send(cats);
    } catch (error) {
        next(error);
    }
});

module.exports = {createShow}