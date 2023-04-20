// READ operation
export const findUsers = async (db) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users', (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// READ operation by user id
export const findUserById = async (db, requestBody) => {
    const { user_id } = requestBody;
    return new Promise((resolve, reject) => {
        db.query('CALL find_user_by_id(?)', [user_id], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });
};

// READ operation by user id and password
export const findUserByCredentials = async (db, requestBody) => {
    const { user_id, password } = requestBody;
    return new Promise((resolve, reject) => {
        db.query('CALL find_user_by_credentials(?, ?)', [user_id, password], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });
};


// CREATE operation
export const createUser = async (db, requestBody) => {
    const { user_id, password, first_name, last_name } = requestBody;
    return new Promise((resolve, reject) => {
        db.query('CALL create_user(?, ?, ?, ?)', [user_id, password, first_name, last_name], (err, result) => {
            if (err) throw reject(err);
            if (!result[0][0].success) reject(result[0][0].message);
            resolve(requestBody);
        });
    });
};

// DELETE operation - TODO not supported
export const deleteUser = async (db, requestBody) => {
    const { user_id } = requestBody;
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM users WHERE user_id = ?', user_id, (err, result) => {
            if (err) throw reject(err);
            resolve({
                status: 200
            });
        });
    });
};

// UPDATE operation
export const updateUserPassword = async (db, requestBody) => {
    const { user_id, password } = requestBody;

    // Call the mysql function to perform the update
    return new Promise((resolve, reject) => {
        db.query('CALL update_user_password(?, ?)', [user_id, password], (err, result) => {
            if (err) reject(err);
            if (!result[0][0].success) reject(result[0][0].message);
            resolve(resolve(requestBody));
        });
    });
}