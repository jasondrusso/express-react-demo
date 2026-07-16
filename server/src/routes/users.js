const express = require('express');
const router = express.Router();

const db = require('../db/sqlitedb.mjs');

// Middleware specific to this router
router.use((req, res, next) => {
    // console.log('Users Router Time:', Date.now());
    next();
});

// Define routes
router.get('/', async (req, res, next) => {
    try {
        let result = await db.UserData.getAllUsers();
        res.status(200).json({ users: result });
    } catch (e) {
        res.status(401).send(`Error: ${e}`);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let result = await db.UserData.getUser(req.params.id);
        res.status(200).json({ users: result });
    } catch (e) {
        res.status(401).send(`Error: ${e}`);
    }
});

module.exports = router;