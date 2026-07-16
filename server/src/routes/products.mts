import { Router } from 'express';
import { ProductData } from '../db/sqlitedb.mjs';

const router = Router();
const productData = new ProductData();

// Define routes
router.get('/', async (req, res) => {
    try {
        let results = await productData.getAllProducts();
        res.status(200).json({ products: results });
    } catch (e) {
        res.status(401).send(`Error ${e}`);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let productId: number = parseInt(req.params.id);
        let results = await productData.getProduct(productId);
        res.status(200).json({ products: results });
    } catch (e) {
        res.status(401).send(`Error ${e}`);
    }
});

router.get('/user/:userId', (req, res) => {
    
});

export { router };