import { Router } from 'express';
import { getProducts, postProduct } from '../controllers/productController.js';
import { validateProduct } from '../middlewares/productValidator.js';

const router = Router();

router.get("/products", getProducts);
router.post("/product", validateProduct, postProduct)

export default router;