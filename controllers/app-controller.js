import * as appDao from './app-dao.js';

const AppController = (app, db) => {
    app.get('/api/languages/all', (req, res) => getAllSupportedLanguages(req, res, db))
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

export default AppController;
