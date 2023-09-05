const express = require('express')
const usersRouter = express.Router();

const {
    createUser,
    getUser,
    getUserByEmail,
    getAllUsers,
    getUserById,
    verifyToken
} = require('../db');

const jwt = require('jsonwebtoken')

usersRouter.get('/', async( req, res, next) => {
    try {
        const users = await getAllUsers();
        res.send({
            users
        });
    } catch ({name, message}) {
        next({name, message})
    }
});

//console.log('hi')
usersRouter.post('/hello', async(req,res, next) => {
    res.send({one: '1'});
});

usersRouter.post('/login', async(req, res, next) => {
    const { loginName, password } = req.body;
    if(!loginName || !password) {
        next({
            name: 'MissingCredentialsError',
            message: 'Please supply a password and an email or username'
        });
    }
    try {
        const user = await getUser({loginName, password});
        if(user) {
            const token = jwt.sign({
                id: user.id,
                email: user.email
            }, process.env.JWT_SECRET, {
                expiresIn: '1w'
            });

            res.send({
                message: 'Login successful!',
                token
            });
        }
        else {
            next({
                name: 'IncorrectCredentialsError',
                message: 'Username or password is incorrect'
            });
        }
    } catch(err) {
        console.log(err.message);
        next(err);
    }
});

usersRouter.post('/login', async (req, res, next) => {
    const { loginName, password } = req.body;
    if (!loginName || !password) {
      next({
        name: 'MissingCredentialsError',
        message: 'Please supply a password and an email or username',
      });
    }
    try {
      const user = await getUser({ loginName, password });
      if (user) {
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            username: user.username,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '1w',
          }
        );
  
        // Include user data in the response
        res.send({
          message: 'Login successful!',
          token,
          user, 
        });
      } else {
        next({
          name: 'IncorrectCredentialsError',
          message: 'Username or password is incorrect',
        });
      }
    } catch (err) {
      console.error(err.message);
      next(err);
    }
  });
  
//Route for requesting user information?
usersRouter.get('/me', verifyToken, async (req, res, next) => {
  console.log("me")
  try {
    //const userId = req.user.id; //Extract ID
  console.log(req.user)
    //const user = await getUserById(userId); //Fetch data with ID
//Error for user not found
    //if (!user) {
      //return res.status(err).json({ message: 'User not found' });
    //}
//Respond with user profile or I want it to at least
    res.json(req.user);
  } catch (error) {
    console.error(error);
    next(error);
  }
});


usersRouter.get('/:userId', async (req, res, next) => {
  console.log("id")
    try {
      const userId = req.params.userId;
      console.log('Fetching user with ID:', userId);
      
      const user = await getUserById(userId);
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      
      console.log('User data:', user);
      
      res.send(user);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }); //

  
module.exports = usersRouter;