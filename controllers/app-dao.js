// READ operation by user id
export const findAllLanguages = async (db, requestBody) => {
    return new Promise((resolve, reject) => {
        db.query('CALL find_all_languages()', [], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });
};