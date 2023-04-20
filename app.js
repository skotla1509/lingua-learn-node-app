import mysql from 'mysql';
import express from 'express';
import cors from 'cors';
import UsersController from "./controllers/users/users-controller.js";

// Initialise app
const app = express();
app.use(express.json());
app.use(cors());

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


// Listen on port 5000
const server = app.listen(process.env.PORT || 5000, () => {
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