const db = require('./client');

const createReview = async({title, body, showName, userName, timestamp}) => {
    try {
        const { rows } = await db.query(`
        INSERT INTO reviews( title, body, showName, userName, timestamp )
        VALUES($1, $2, $3, $4, $5)
        RETURNING *`,  [title, body, showName, userName, timestamp]);

        return rows;
    } catch (err) {
        throw err;
    }
}

const postReview = async(review) => {
    try {
        const response = await fetch('/shows/show/:id/reviews', {
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
}

function renderNewReviewForm() {
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
  }

module.exports = {createReview, postReview, renderNewReviewForm}