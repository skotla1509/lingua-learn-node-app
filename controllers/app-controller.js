import * as appDao from './app-dao.js';

const AppController = (app, db) => {
    app.get('/api/languages/all', (req, res) => getAllSupportedLanguages(req, res, db))
    app.get('/api/languages/decks/:id', (req, res) => getAllDecksLanguages(req, res, db))
    app.get('/api/languages/posts/:id', (req, res) => getAllPostsForLanguages(req, res, db))
    app.post('/api/languages/posts/:id/new', (req, res) => createPostForLanguage(req, res, db))
    app.get('/api/languages/decks/:id/cards', (req, res) => getAllCardsForDeck(req, res, db))
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



export default AppController;
