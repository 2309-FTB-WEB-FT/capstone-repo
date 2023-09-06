const db = require("./client");
const { showData } = require("./showData");
const { createUser } = require("./users");
const { createShow } = require("./shows");
const { createReview } = require("./reviews");
//const { createComment } = require('./comments')

const users = [
  {
    name: "Emily Johnson",
    email: "emily@example.com",
    password: "securepass",
  },
  {
    name: "Liu Wei",
    email: "liu@example.com",
    password: "strongpass",
  },
  {
    name: "Isabella García",
    email: "bella@example.com",
    password: "pass1234",
  },
  {
    name: "Mohammed Ahmed",
    email: "mohammed@example.com",
    password: "mysecretpassword",
  },
  {
    name: "John Smith",
    email: "john@example.com",
    password: "password123",
  },
  // Add more user objects as needed
];

const reviews = [
  {
    title: "funny as hell",
    body: "I love this show its so funny!! cnat wiat fo r seson 2",
  },
];

const comments = [
  {
    body: "Wow you are so funny!!",
  },
];

const dropTables = async () => {
  try {
    await db.query(`
        DROP TABLE IF EXISTS users CASCADE;
        DROP TABLE IF EXISTS shows CASCADE;
        DROP TABLE IF EXISTS reviews CASCADE;
        DROP TABLE IF EXISTS comments;
        `);
  } catch (err) {
    throw err;
  }
};

const createTables = async () => {
  try {
    await db.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) DEFAULT 'name',
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        )`);
    await db.query(
      `CREATE TABLE shows(
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) DEFAULT 'name',
          genre VARCHAR(255),
          image VARCHAR(1000),
          description TEXT,
          averageLength INTEGER)`
    );
    await db.query(
      `CREATE TABLE reviews(
          id SERIAL PRIMARY KEY,
          title TEXT,
          body TEXT,
          showName INTEGER REFERENCES shows(id),
          userName INTEGER REFERENCES users(id)
        )`
    );

    /* await db.query(

        `CREATE TABLE comments(
          id SERIAL PRIMARY KEY,
          userId INTEGER REFERENCES users(id),
          reviewId INTEGER REFERENCES reviews(id),
          body TEXT
        )`
      )*/
  } catch (err) {
    throw err;
  }
};

const insertUsers = async () => {
  try {
    for (const user of users) {
      await createUser({
        name: user.name,
        email: user.email,
        password: user.password,
      });
    }
    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error inserting seed data:", error);
  }
};

const insertShows = async () => {
  try {
    for (const show of showData) {
      await createShow({
        name: show.name,
        genre: show.genres[0],
        image: show.image.medium,
        description: show.summary,
        averageLength: show.averageRuntime,
      });
    }
    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error inserting seed data:", error);
  }
};

const insertReviews = async () => {
  try {
    for (review of reviews) {
      await createReview({
        title: review.title,
        body: review.body,
        show: review.showName,
        user: review.userName,
      });
    }
  } catch (error) {
    console.log("error inserting review seed data", error);
  }
};

/*const insertComment = async () => {
  try {
    for (comment of comments) {
      await createComment({user: review.user, review: review.review, body: review.body})
    }
  } catch (err) {
    throw err;
  }
}*/

const seedDatabse = async () => {
  try {
    db.connect();
    await dropTables();
    await createTables();
    await insertUsers();
    await insertShows();
    await insertReviews();
    // await insertComment();
  } catch (err) {
    throw err;
  } finally {
    db.end();
  }
};

seedDatabse();
