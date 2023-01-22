import { Router } from 'express';
import { getProducts, postProduct, deleteProduct } from '../controllers/productController.js';
import { validateProduct, validateQuery } from '../middlewares/productValidator.js';

const router = Router();

router.get("/products", getProducts);
router.post("/products", validateProduct, postProduct);
router.delete("/teste", validateQuery, deleteProduct);

export default router;