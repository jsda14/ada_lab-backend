import { Request, Response } from "express";
import { Orders } from '../Models/Orders';


export class OrdersRepository {
    public static async sendOrder(req: Request, res: Response) {
        const body = req.body
        console.log(body);
        let orderCreated = await Orders.create(body);

        return orderCreated;

    }
}