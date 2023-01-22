import { Router } from 'express';
import { getProducts, postProduct, deleteProduct, updateProduct } from '../controllers/productController.js';
import { validateProduct, validateQuery } from '../middlewares/productValidator.js';

const router = Router();

router.get("/products", getProducts);
router.post("/products", validateProduct, postProduct);
router.delete("/products", validateQuery, deleteProduct);
router.put("/products", validateQuery, updateProduct)

export default router;