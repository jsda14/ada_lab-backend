import { Response, Request } from "express";
import { OrdersRepository } from "../Repository/orders.repository";


export class OrdersService {

    public static async sendOrder(req: Request, res: Response) {
        const data = req.body;
        if (data.ai_modeling.length === 1) {
            for (let i in data) {
                let newData = {
                    client: data.client,
                    date: data.date,
                    ai_modeling: data.ai_modeling[0],
                    development_time: data.development_time[0],
                    input_query: data.input_query[0],
                    filters: data.filters[0],
                    total: data.total[0]
                }
                req.body = newData;
            }
        }

        return await OrdersRepository.sendOrder(req, res);

    }
}