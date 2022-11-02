import { Router } from "express";
import products from "./products.routes";
import users from "./users.routes";
import orders from "./orders.routes"

const router = Router();

router.use('/products', products);
router.use('/users', users);
router.use('/orders', orders );

export default router;