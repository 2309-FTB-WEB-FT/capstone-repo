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


async function getShowByID(id){
    try {
        //console.log('test')
        const {rows: [num]} = await db.query(`
        SELECT * FROM shows
        WHERE id = $1
        `,[id])
        
        //console.log(num);
        return num;
    } catch(error) {
        throw error;
    }
}

async function getAllShows(){
    try {
        //console.log('hiiiiii')
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
        //console.log('yo')
        const {rows:[title]} = await db.query(`
        SELECT * FROM shows
        WHERE name = $1 
    `, [name]);
        //console.log(name)
        return title;
    } catch (error) {
        throw (error)
    }
}

async function getShowByGenre(genre) {
    try {
        console.log('test')
        const {rows: [type]} = await db.query(`
        SELECT name FROM shows
        WHERE genre = $1`,
        [genre]);
        console.log(type)
        return type;
    } catch (error) {
        throw (error)
    }
}
module.exports = {createShow, getAllShows, getShowByTitle, getShowByID, getShowByGenre}