import { Router } from 'express';
import { getAllProducts, getProduct } from '../db/sqlitedb.mjs';

const router = Router();

// Define routes
router.get('/', async (req, res) => {
    try {
        let results = await getAllProducts();
        res.status(200).json({ products: results });
    } catch (e) {
        res.status(401).send(`Error ${e}`);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let productId: number = parseInt(req.params.id);
        let results = await getProduct(productId);
        res.status(200).json({ products: results });
    } catch (e) {
        res.status(401).send(`Error ${e}`);
    }
});

router.get('/user/:userId', (req, res) => {
    
});

export { router };