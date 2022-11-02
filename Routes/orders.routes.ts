import { Router } from "express";
import { OrdersController } from "../Controllers/orders.controller";


const router = Router();
router.post('/sendOrder', OrdersController.sendOrder)

export default router;