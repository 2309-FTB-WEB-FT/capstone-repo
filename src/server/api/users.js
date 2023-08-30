const express = require('express')
const usersRouter = express.Router();

const {
    createUser,
    getUser,
    getUserByEmail,
    getAllUsers,
    getUserById
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

usersRouter.post('/register', async(req, res, next) => {
    const { name, email, password } = req.body;

    try {
        const _user = await getUserByEmail(email);

        if(_user) {
            next({
                name: 'UserExistsError',
                message: 'A user with that email already exists'
            });
        }

        const user = await createUser({
            name,
            email,
            password
        });

        const token = jwt.sign({
            id: user.id,
            email
        }, process.env.JWT_SECRET, {
            expiresIn: '1w'
        });

        res.send({
            message: 'Sign up successful!',
            token
        });
    } catch({name, message}) {
        next({name, message})
    }
});


usersRouter.get('/:userId', async (req, res, next) => {
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
  });
  
module.exports = usersRouter;