import { Router } from "express";
import { ProductsController } from '../Controllers/products.controller';


const router = Router();

router.get('/getProducts', ProductsController.getProducts);
router.get('/getParams', ProductsController.getParams);
router.post('/getPrices', ProductsController.getPrices);


export default router;