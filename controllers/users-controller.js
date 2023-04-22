import * as usersDao from './users-dao.js';

const UserController = (app, db) => {
    app.post('/register', (req, res) => register(req, res, db))
    app.post('/changepassword', (req, res) => changePassword(req, res, db))
    app.post('/login', (req, res) => login(req, res, db))
    app.post('/logout', (req, res) => logout(req, res, db))
    app.post('/profile', profile)

    /*
    app.get('/api/users', (req, res) => findUsers(req, res, db));
    app.get('/api/users/:user_id', (req, res) => findUserById(req, res, db));
    app.post('/api/users', (req, res) => createUser(req, res, db));
    app.delete('/api/users/:user_id', (req, res) => deleteUser(req, res, db));
    app.put('/api/users/:user_id', (req, res) => updateUser(req, res, db));
    */
};


// Register operation
const register = async (req, res, db) => {
    try {
        const user = req.body;
        const existingUser = await usersDao.findUserById(db, user);
        if (existingUser.length > 0) {
            res.sendStatus(403);
            return;
        }
        const currentUser = await usersDao.createUser(db, user);
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: err });
    }
}

// Login operation
const login = async (req, res, db) => {
    try {
        const credentials = req.body;
        const existingUser = await usersDao.findUserByCredentials(db, credentials);
        if (existingUser.length > 0) {
            existingUser[0].password = '';
            req.session['currentUser'] = existingUser[0];
            res.json(existingUser[0]);
            return;
        }
        res.sendStatus(403)
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: err });
    }
}

// Change Password operation
const changePassword = async (req, res, db) => {
    try {
        const user = req.body;
        const existingUser = await usersDao.findUserById(db, user);
        if (existingUser.length > 0) {
            const currentUser = await usersDao.updateUserPassword(db, user);
            res.sendStatus(200);
            return;
        }
        res.sendStatus(403);
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: err });
    }
}

// Logout operation
const logout = (req, res, db) => {
    req.session.destroy()
    res.sendStatus(200)
}

const profile = (req, res) => {
    if (req.session['currentUser']) {
        res.send(req.session['currentUser'])
    } else {
        res.sendStatus(403)
    }
}

export default UserController;
