import * as appDao from './app-dao.js';

const AppController = (app, db) => {
    app.get('/api/languages/all', (req, res) => getAllSupportedLanguages(req, res, db))
    app.post('/api/languages/:id/learn', (req, res) => addLanguageLearning(req, res, db))
    app.get('/api/languages/decks/:id', (req, res) => getAllDecksLanguages(req, res, db))
    app.get('/api/languages/posts/:id', (req, res) => getAllPostsForLanguages(req, res, db))
    app.post('/api/languages/posts/:id/new', (req, res) => createPostForLanguage(req, res, db))
    app.get('/api/languages/decks/:id/cards', (req, res) => getAllCardsForDeck(req, res, db))
    app.get('/api/languages/decks/:id/questions', (req, res) => getAllPracticeQuestionsForDeck(req, res, db))
    app.post('/api/languages/decks/:id/practice', (req, res) => createPracticeHistoryForLanguage(req, res, db))
    app.post('/api/languages/decks/:id/user/:uid/favorite', (req, res) => markUnmarkDeckAsFavoriteForUser(req, res, db))
    app.get('/api/languages/decks/:id/user/:uid/favorite', (req, res) => checkFavoriteDeckForUser(req, res, db))
    app.get('/api/languages/decks/:id/feedback', (req, res) => getFeedbackForDeck(req, res, db))
    app.get('/api/languages/decks/:id/feedback/average', (req, res) => getAverageFeedbackForDeck(req, res, db))
    app.post('/api/languages/decks/:id/feedback', (req, res) => addNewFeedbackForDeck(req, res, db))
};


// Register operation
const getAllSupportedLanguages = async (req, res, db) => {
    try {
        const result = await appDao.findAllLanguages(db, {});
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

const addLanguageLearning = async (req, res, db) => {
    try {
        const language_id = req.params['id']
        const requestBody = {...req.body, language_id}
        const result = await appDao.addLanguageLearning(db, requestBody);
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}


//Get all decks for Language
const getAllDecksLanguages = async (req, res, db) => {
    try {
        const language_id = req.params['id']
        const result = await appDao.findAllDecksForLanguage(db, {language_id} );
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

//Get all posts for Language
const getAllPostsForLanguages = async (req, res, db) => {
    try {
        const language_id = req.params['id']
        const result = await appDao.getAllPostsForLanguages(db, {language_id} );
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

//Get all posts for Language
const createPostForLanguage = async (req, res, db) => {
    try {
        const language_id = req.params['id']
        const requestBody = {...req.body,language_id}
        const result = await appDao.createPostForLanguage(db, requestBody );
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

//Get all posts for Language
const getAllCardsForDeck = async (req, res, db) => {
    try {
        const deck_id = req.params['id']
        const result = await appDao.getAllCardsForDeck(db, {deck_id} );
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

//Get all posts for Language
const getAllPracticeQuestionsForDeck = async (req, res, db) => {
    try {
        const deck_id = req.params['id']
        const result = await appDao.getAllPracticeQuestionsForDeck(db, {deck_id} );
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

//Get all posts for Language
const createPracticeHistoryForLanguage = async (req, res, db) => {
    try {
        const deck_id = req.params['id']
        const requestBody = {...req.body,deck_id}
        const result = await appDao.createPracticeHistoryForLanguage(db, requestBody );
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

// Mark Favorite Deck for user
const markUnmarkDeckAsFavoriteForUser = async (req, res, db) => {
    try {
        const deck_id = req.params['id']
        const user_id = req.params['uid']
        const result = await appDao.markUnmarkDeckAsFavoriteForUser(db, {deck_id, user_id} );
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

// Mark Favorite Deck for user
const checkFavoriteDeckForUser = async (req, res, db) => {
    try {
        const deck_id = req.params['id']
        const user_id = req.params['uid']
        const result = await appDao.checkFavoriteDeckForUser(db, {deck_id, user_id} );
        res.json(result)
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

const getFeedbackForDeck = async (req, res, db) => {
    try {
        const deck_id = req.params['id']
        const result = await appDao.getFeedbackForDeck(db, {deck_id} );
        res.json(result)
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

const getAverageFeedbackForDeck = async (req, res, db) => {
    try {
        const deck_id = req.params['id']
        const result = await appDao.getAverageFeedbackForDeck(db, {deck_id} );
        res.json(result)
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

const addNewFeedbackForDeck = async (req, res, db) => {
    try {
        const deck_id = req.params['id']
        const requestBody = {...req.body, deck_id}
        const result = await appDao.addNewFeedbackForDeck(db, requestBody );
        res.json(result)
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}


export default AppController;
