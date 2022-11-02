import { Request, Response } from "express";
import { sequelize } from "../db/config";
import { OrdersService } from "../services/orders.service";



export class OrdersController {

    public static async sendOrder(req: Request, res: Response) {

        try {
            res.status(200).json(await OrdersService.sendOrder(req, res))
        } catch (error) {
            res.status(400).json({
                error: error
            })
        }
    }
}