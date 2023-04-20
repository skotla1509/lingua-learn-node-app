import mysql from 'mysql';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import UsersController from "./controllers/users-controller.js";
import SessionController from "./controllers/session-controller.js";
import AppController from "./controllers/app-controller.js";

// Initialise app
const app = express();
app.use(express.json());
let sess = {
    secret: "SECRET",
    cookie: { secure: false }
};
if (process.env.ENV === 'production') {

    app.set('trust proxy', 1)
    sess.cookie.secure = true;
}
app.use(session(sess));
app.use(cors(
    {
        credentials: true,
        origin: 'http://localhost:3000'
    }
));

// Connect to DB
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'alice',
    password: 'alice@123',
    database: 'language_learning',
    authPlugin: 'mysql_native_password'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database with threadId ' + connection.threadId);
});

// Controllers
UsersController(app, connection);
AppController(app, connection);
SessionController(app);


// Listen on port 5000
const server = app.listen(process.env.PORT || 1000, () => {
    console.log(`Server started on port ${server.address().port}`);
});

// End DB connection when server stops
process.on('SIGTERM', () => {
    console.log('Server shutting down');
    server.close(() => {
        console.log('Server stopped');
        connection.end();
    });
});