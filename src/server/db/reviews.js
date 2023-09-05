const db = require('./client');

const createReview = async({title, body, showName, userName, timestamp=Date.now()}) => {
    try {
        console.log(title, body, showName, userName, timestamp)
        const { rows } = await db.query(`
        INSERT INTO reviews( title, body, showname, username, timestamp )
        VALUES($1, $2, $3, $4, $5)
        RETURNING *;`,  [title, body, showName, userName, timestamp]);

        return rows;
    } catch (err) {
        throw err;
    }
}

/*const postReview = async(review) => {
    try {
        console.log('working??')
        const response = await fetch('/shows/show/:id', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
          });
          const newReview = await response.json();
          return newReview;
    } catch (err) {
        throw err;
    }
}*/

/*function renderNewReviewForm() {
    const newReviewForm = document.querySelector('#new-review-form');
    newReviewForm.innerHTML = `
      <form>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />
        <label for="body">Body</label>
        <input type="text" name="body" id="body" />
        <label for="showName">Show:</label>
        <input type="text" name="showName" id="showName" />
        <label for="userName">Review Author</label>
        <input type="text" name="userNamee" id="userName" />
        <label for="timestamp">timestamp</label>
        <input type="date" name="timestamp" id="timestamp" />
        <button type="submit">Submit</button>
      </form>
    `;
  }*/

const getAllReviews = async() => {
 
    try {
        
        const {rows} = await db.query(`
            SELECT * FROM reviews;
        `);
        //console.log(rows)
        return rows;
    } catch (error) {
        throw error;
}}

const getReviewById = async(id) => {
  try {
    console.log('test')
    const {rows: [num]} = await db.query(`
    SELECT * FROM reviews
    WHERE id = $1;`, [id]);
    return num;
  } catch(err) {
    throw err;
  }
}

const destroyReview = async(id) => {
  try {
      await client.query(`
      DELETE FROM reviews 
      WHERE "reviewId" = $1;
  `, [id]);
  const {rows: [review]} = await client.query(`
      DELETE FROM reviews
      WHERE id = $1
      RETURNING *
  `, [id]);
  return review;

  } catch (err){ 
      next (err)
  }
}
module.exports = {createReview, getAllReviews, getReviewById, destroyReview}