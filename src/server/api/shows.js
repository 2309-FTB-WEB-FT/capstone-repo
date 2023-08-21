const express = require(`express`);
const router = express.Router();
const { getAllShows, getShowsId, createShow, updateShow, deleteShow } = require('../db/shows');

async function getAllShows(){
    try {
        const {shows} = await client.query(`
            SELECT * FROM shows;
        `);
        return shows;
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