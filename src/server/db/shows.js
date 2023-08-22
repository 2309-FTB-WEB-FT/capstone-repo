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

async function getShowByTitle(name){
    try {
        console.log('yo')
        const {rows:[title]} = await db.query(`
        SELECT * FROM shows
        WHERE name = $1 AND genre = $2 AND image = $3 AND description = $4 AND averageLength = $5
    `, [name, genre, image, description, averageLength]);
        console.log(title)
        return rows;
    } catch (error) {
        throw (error)
    }
}


module.exports = {createShow, getAllShows, getShowByTitle}