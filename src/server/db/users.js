const db = require('./client')
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

const createUser = async({ name='first last', email, password }) => {
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
    try {
        const { rows: [user ] } = await db.query(`
        INSERT INTO users(name, email, password)
        VALUES($1, $2, $3)
        ON CONFLICT (email) DO NOTHING
        RETURNING *`, [name, email, hashedPassword]);

        return user;
    } catch (err) {
        throw err;
    }
}

const getUser = async({loginName, password}) => {
    if(!loginName || !password) {
        return;
    }

    try {
        let user = null;
        if (loginName.includes('@')) { 
            user = await getUserByEmail(loginName);
        } else {
            user = await getUserByName(loginName);
        }
        if(!user) return;

        const hashedPassword = user.password;
        const passwordsMatch = await bcrypt.compare(password, hashedPassword);
        if(!passwordsMatch) return;
        delete user.password;
        return user;
    } catch (err) {
        throw err;
    }
}

const getUserByName = async (name) => {
    try {
      const { rows } = await db.query(`
        SELECT * 
        FROM users
        WHERE name = $1;`, [name]);
  
      if (rows.length === 0) {
        return null; 
      }
  
      return rows[0]; 
    } catch (err) {
      throw err;
    }
  };
  
  

const getAllUsers = async () => {
    try {
        const { rows } = await db.query(`
        SELECT * 
        FROM users`);

        if(!rows) {
            return;
        }
        return rows;
    } catch (err) {
        throw err;
    }
}

const getUserById = async (id) => { 
    try {
        const { rows } = await db.query(`
        SELECT * 
        FROM users
        WHERE id = $1;`, [id]);

    if (rows.length === 0) {
        return null; 
    }

    return rows[0];

} catch (err) {
    throw err;
}
};

const getUserByEmail = async(email) => {
    try {
        const { rows: [ user ] } = await db.query(`
        SELECT * 
        FROM users
        WHERE email=$1;`, [ email ]);

        if(!user) {
            return;
        }
        return user;
    } catch (err) {
        throw err;
    }
}
//Verifies token authenticity
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
  //gives error if no token is provided
    if (!token) {
      return res.status(401).json({ message: 'Token not provided' });
    }
  //Gives error if no token is invalid
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(error).json({ message: 'Invalid token' });
      }
  //Stores user information I hope?
      req.user = decoded;
      next();
    });
  };

module.exports = {
    createUser,
    getUser,
    getUserByName,
    getUserById,
    getUserByEmail,
    getAllUsers,
    verifyToken
  
};