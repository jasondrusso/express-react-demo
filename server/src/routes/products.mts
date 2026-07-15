import { Router } from 'express';
import '../../dist/db/sqlitedb.js';

const router = Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Products list');
});

router.get('/:id', (req, res) => {
    res.send(`Product details for ID: ${req.params.id}`);
});

router.get('/user/:userId', (req, res) => {
    
});

export { router };