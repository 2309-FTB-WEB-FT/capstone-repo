const db = require('./client');
const { getAllShows, getShowsId, createShow, updateShow, deleteShow } = require('../db');
const router = espress.Router();

const createShow = async({ name, genre, image, description, averageLength }) => {
    try {
        const { rows: [ show ] } = await db.query(`
        INSERT INTO shows(name, genre, image, description, averageLength)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *`,  [name, genre, image, description, averageLength]);

        return show;
    } catch (err) {
        throw err;
    }
}

async function getAllShows(){
    try {
        const {rows} = await client.query(`
            SELECT * FROM shows;
        `);
        return rows;
    } catch (error) {
        throw error;
    }
}



router.get('/shows', async (req, res, next) => {
    try {
        const show = await getAllShows(req.params.show);
        console.log(show)
        res.send(cats);
    } catch (error) {
        next(error);
    }
});

module.exports = {createShow, getAllShows}