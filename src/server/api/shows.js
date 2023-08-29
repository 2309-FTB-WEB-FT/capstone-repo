const express = require(`express`);
const router = express.Router();
const { getAllShows, getShowByGenre, createShow, updateShow, deleteShow, getShowByID, getShowByTitle } = require('../db/shows');
const { showData } = require(`../db/showData`)

router.get('/', async (req, res, next) => {
    try {
      const searchQuery = req.query.query; // Get the search query from the query parameter
      const shows = await getAllShows(searchQuery); 
      res.send(shows);
    } catch (error) {
      next(error);
    }
  });

  router.get('/:name', async (req, res, next) => {
    try {
      const searchQuery = req.query.query;
      const show = await getShowByTitle(req.params.name, searchQuery);
      res.send(show);
    } catch (error) {
      next(error);
    }
  });

  router.get('/:id', async (req, res, next) => {
    try {
      const id = await getShowByID(req.params.id);
      res.send(id);
    } catch (error) {
      next(error);
    }
  });

  router.get('/genre/:genre', async (req, res, next) => {
    try {
      const searchQuery = req.query.query; 
      const genre = await getShowByGenre(req.params.genre, searchQuery);
      res.send(genre);
    } catch (error) {
      next(error);
    }
  });
  
module.exports = router