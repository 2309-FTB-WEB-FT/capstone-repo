const db = require('./client');
const { getShow, updateShow, deleteShow } = require('../db');
//const router = express.Router();

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
        console.log('hiiiiii')
        const {rows} = await db.query(`
            SELECT * FROM shows;
        `);
        //console.log(rows)
        return rows;
    } catch (error) {
        throw error;
    }
}

async function getShowByTitle(title) {
    try {
        console.log('yo')
        const { rows } = await db.query(`
            SELECT * FROM shows
            WHERE name ILIKE $1
        `, [`%${title}%`]);

        return rows;
    } catch (error) {
        throw error;
    }
}


module.exports = {createShow, getAllShows, getShowByTitle}