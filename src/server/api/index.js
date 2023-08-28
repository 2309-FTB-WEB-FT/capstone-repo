const express = require('express');
const apiRouter = express.Router();
const jwt = require('jsonwebtoken');


const volleyball = require('volleyball')
apiRouter.use(volleyball)


// TO BE COMPLETED - set `req.user` if possible, using token sent in the request header
apiRouter.use(async (req, res, next) => {
  const auth = req.header('Authorization');
  if (!auth) { 
    next();
  } 
  else if (auth.startsWith('Bearer')) {
    // TODO - Get JUST the token out of 'auth'
    const token = 'REPLACE_ME'; /// Split the auth header value by a space - second element is the token
    
    try {

      const parsedToken = 'REPLACE_ME';  // parse the JWT token that you split out above.
      // TODO - Call 'jwt.verify()' to see if the token is valid. 
      //If it is, use it to get the user's 'id'. 
      //Look up the user with their 'id' and set 'req.user'

    } catch (error) {
      next(error);
    }
  } 
  else {
    next({
      name: 'AuthorizationHeaderError',
      message: `Authorization token must start with 'Bearer'`
    });
  }
});


const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

const showRouter = require('./shows');
apiRouter.use('/shows', showRouter);

apiRouter.use((err, req, res, next) => {
    res.status(500).send(err)
  })

module.exports = apiRouter;