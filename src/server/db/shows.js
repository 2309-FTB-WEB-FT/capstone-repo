const db = require("./client");
const { getShow, updateShow, deleteShow } = require("../db");
//const router = express.Router();

async function createShow({ name, genre, image, description, averageLength }) {
  try {
    const {
      rows: [show],
    } = await db.query(
      `
        INSERT INTO shows(name, genre, image, description, averageLength)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *`,
      [name, genre, image, description, averageLength]
    );

    return show;
  } catch (err) {
    throw err;
  }
}

async function getShowByID(id) {
  try {
    console.log("test");
    const {
      rows: [num],
    } = await db.query(
      `
        SELECT * FROM shows
        WHERE id = $1
        `,
      [id]
    );

    console.log(num);
    return num;
  } catch (error) {
    throw error;
  }
}

async function getAllShows(searchQuery) {
  try {
    let query = `SELECT * FROM shows`;
    if (searchQuery) {
      query = `${query} WHERE name ILIKE $1`;
    }
    const values = searchQuery ? [`%${searchQuery}%`] : [];
    const { rows } = await db.query(query, values);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getShowByTitle(name, searchQuery) {
  try {
    let query = `SELECT * FROM shows WHERE name = $1`;
    if (searchQuery) {
      query = `SELECT * FROM shows WHERE name ILIKE $1`;
    }
    const values = searchQuery ? [`%${searchQuery}%`] : [name];
    const { rows } = await db.query(query, values);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getShowByGenre(genre, searchQuery) {
  try {
    let query = `SELECT * FROM shows WHERE genre = $1`;
    if (searchQuery) {
      query = `SELECT * FROM shows WHERE genre = $1 AND name ILIKE $2`;
    }
    const values = searchQuery ? [genre, `%${searchQuery}%`] : [genre];
    const { rows } = await db.query(query, values);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createShow,
  getAllShows,
  getShowByTitle,
  getShowByID,
  getShowByGenre,
};
