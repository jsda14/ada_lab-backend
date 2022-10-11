import { Router } from "express";
import products from "./products.routes";
import users from "./users.routes";

const router = Router();

router.use('/products', products);
router.use('/users', users)

export default router;