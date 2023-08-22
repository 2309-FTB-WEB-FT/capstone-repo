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

async function getShowByTitle([name, genre, image, description, averageLength]){
    try {
        console.log('yo')
        const {rows:[showByName]} = await db.query(`
            SELECT * FROM shows
            WHERE name, genre, image, description, averageLength = $1, $2, $3, $4, $5
            `, [name, genre, image, description, averageLength]);
        console.log(showByName)
        return showName;
    } catch (error) {
        throw (error)
    }
}


module.exports = {createShow, getAllShows, getShowByTitle}