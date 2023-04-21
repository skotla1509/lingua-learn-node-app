// READ operation by user id
export const findAllLanguages = async (db, requestBody) => {
    return new Promise((resolve, reject) => {
        db.query('CALL find_all_languages()', [], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });
};

export const addLanguageLearning = async (db, requestBody) => {
    const {language_id, user_id} = requestBody;
    return new Promise((resolve, reject) => {
        db.query('CALL add_learning(?, ?)', [user_id, language_id], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });
};

//Return all decks for Language
export const findAllDecksForLanguage = async (db, requestBody) => {
    const {language_id} = requestBody;
    return new Promise((resolve, reject) => {
        db.query('CALL find_all_decks_by_language( ? )', [language_id], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });
};

//Return all decks for Language
export const getAllPostsForLanguages = async (db, requestBody) => {
    const {language_id} = requestBody;
    return new Promise((resolve, reject) => {
        db.query('CALL find_all_posts_by_language( ? )', [language_id], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });
};

//Create a new post for Language
export const createPostForLanguage = async (db, requestBody) => {
    const {user_id, content, language_id} = requestBody;
    return new Promise((resolve, reject) => {
        db.query('CALL create_language_exchange_post( ?, ? , ? )', [user_id,content,language_id], (err, result) => {
            if (err) reject(err);
            resolve(result[1][0]);
        });
    });
};

//Return all cards for deck
export const getAllCardsForDeck = async (db, requestBody) => {
    const {deck_id} = requestBody;
    return new Promise((resolve, reject) => {
        db.query('CALL find_all_cards_by_deck( ? )', [deck_id], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });
};

//Return all questions for deck
export const getAllPracticeQuestionsForDeck = async (db, requestBody) => {
    const {deck_id} = requestBody;
    return new Promise((resolve, reject) => {
        db.query('CALL find_all_questions_by_deck( ? )', [deck_id], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });
};


//Create a new entry for practice history for deck
export const createPracticeHistoryForLanguage = async (db, requestBody) => {
    const {user_id, deck_id, score_received} = requestBody;
    return new Promise((resolve, reject) => {
        db.query('CALL create_practice_history_for_deck( ?, ? ,? )', [user_id,deck_id,score_received], (err, result) => {
            if (err) reject(err);
            resolve(result[1][0]);
        });
    });
};

//Create a new entry for practice history for deck
export const markUnmarkDeckAsFavoriteForUser = async (db, requestBody) => {
    const {user_id, deck_id} = requestBody;
    return new Promise((resolve, reject) => {
        db.query('CALL mark_unmark_favorite_deck_for_user( ?, ? )', [user_id, deck_id], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });
};

//Create a new entry for practice history for deck
export const checkFavoriteDeckForUser = async (db, requestBody) => {
    const {user_id, deck_id} = requestBody;
    return new Promise((resolve, reject) => {
        db.query('SELECT check_favorite(?, ?) as is_favorite', [user_id, deck_id], (err, result) => {
            if (err) reject(err);
            resolve(result[0].is_favorite);
        });
    });
};

export const getFeedbackForDeck = async (db, requestBody) => {
    const {deck_id} = requestBody;
    return new Promise((resolve, reject) => {
        db.query('CALL find_feedback_of_deck(?)', [deck_id], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });
};

export const getAverageFeedbackForDeck = async (db, requestBody) => {
    const {deck_id} = requestBody;
    return new Promise((resolve, reject) => {
        db.query('SELECT avg_rating_for_deck(?) as avg_rating', [deck_id], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });
};

export const addNewFeedbackForDeck = async (db, requestBody) => {
    const {deck_id, user_id, rating, comment} = requestBody;
    return new Promise((resolve, reject) => {
        db.query('CALL add_new_feedback(?, ?, ?, ?)', [user_id, deck_id, rating, comment], (err, result) => {
            if (err) reject(err);
            resolve(result[1][0]);
        });
    });
};