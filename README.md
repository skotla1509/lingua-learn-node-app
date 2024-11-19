# Language Learning App - Node.js Server

## Note
This Node.js server is designed to demonstrate the functionality and features of the **MySQL database**. It showcases how data is created, updated, and managed via APIs, forming the backend foundation for the Language Learning App.

---

## Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Setting Up MySQL](#setting-up-mysql)
- [Setting Up and Running the Project](#setting-up-and-running-the-project)

---

## Overview
The **Language Learning App** backend is a Node.js server designed to manage dynamic features like user accounts, flashcards, exercises, and feedback. It serves as a bridge between the React frontend and the **MySQL database**, handling CRUD operations and ensuring seamless data flow.

This server highlights the importance of a scalable database structure in real-world applications. It’s built to support diverse features while emphasizing robust data management and API efficiency.

### Key Features:
- **User Management**: Register, log in, and manage user profiles.
- **Flashcards**: Create, update, and view flashcards for language learning.
- **Feedback**: Collect and analyze user feedback for continuous improvement.
- **Session Management**: Ensure user data persistence across sessions.
- **MySQL Integration**: Efficiently manage and query relational data for all app features.

---

## Technologies Used
- **Node.js**: Core runtime for the server.
- **Express**: A minimalist framework for creating APIs and handling HTTP requests.
- **CORS**: Middleware to enable cross-origin resource sharing.
- **MySQL**: The relational database powering the application, ensuring data integrity and scalability.

---

## Folder Structure

The project is organized for modularity and scalability:

```
controllers/
├── app-controller.js          # Core logic for app features
├── app-dao.js                 # Data access for app-level operations
├── session-controller.js      # Manages session-related functionality
├── users-controller.js        # Handles user-related API logic
└── users-dao.js               # Data access for user-related operations
```

Each controller handles specific responsibilities:
- **Controllers**: Manage HTTP requests and responses for various app features.
- **DAOs (Data Access Objects)**: Contain logic for interacting with the MySQL database.

---

## Environment Variables

The application currently manages MySQL credentials and server port directly in `app.js`. It is recommended to move these variables to a `.env` file for better flexibility and security. Add a env file and then update `app.js` to use environment variables.

### Example `.env` File:
```env
PORT=5000
MYSQL_HOST=localhost
MYSQL_USER=your_username
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=language_app_db
```
---

## Setting Up MySQL

This project heavily depends on a working **MySQL database**. Below are the steps to set up the database:

1. **Start MySQL Server**:
   Ensure your MySQL instance is running on your system or a remote server.

2. **Set Up the Database**:
   - Import the provided MySQL dump file to create the necessary schema and populate initial data:
     ```bash
     mysql -u your_username -p language_app_db < language_app_dump.sql
     ```

3. **Create a MySQL User**:
   Execute the following commands in MySQL to create a user with the necessary privileges:
   ```sql
   CREATE USER 'your_username'@'localhost' IDENTIFIED BY 'your_password';
   GRANT ALL PRIVILEGES ON language_app_db.* TO 'your_username'@'localhost';
   FLUSH PRIVILEGES;
   ```

4. **Update Connection Settings**:
   Ensure the `app.js` file or `.env` file has the correct database credentials and host information.

---

## Setting Up and Running the Project

### 1. Clone the Repository
Clone the repository to your local machine

### 2. Install Dependencies
Install all required dependencies using npm:
```bash
npm install
```

### 3. Configure the Environment
- Create a `.env` file (optional but recommended) and add your database and server credentials as described above.

### 4. Start the Node.js Server
Run the server:
```bash
node app.js
```
or use **Nodemon** for automatic restarts during development:
```bash
nodemon app.js
```

The server will start on the specified port (default: 1000). Ensure your MySQL database is running and connected.

---