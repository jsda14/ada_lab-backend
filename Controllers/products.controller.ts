import { Request, Response } from "express";
import { sequelize } from "../db/config";
import { ProductsService } from "../services/products.service";



export class ProductsController {

    public static async getProducts(req: Request, res: Response) {
        try {
            const product = await ProductsService.getProducts(req, res);
            res.status(200).json(product)
        } catch (error) {
            res.status(400).json({
                error: error
            })
        }
    }

    public static async getPrices(req: Request, res: Response) {
        const { body } = req;
        let order = body.order;
        let idProducts = body.products;

        let items: string = "";

        if (idProducts.length === 0) {
            return res.send([{ "price": 0 }])
        }

        if (!idProducts) {
            items = ""
        } else if (idProducts.length === 1) {
            items = `AND ITEMS.ID_PRODUCT = ${idProducts[0]}`;
        }
        else if (idProducts.length > 1) {
            for (let i in idProducts) {
                items += `${Number(i) > 0 ? '' : 'AND ('} ITEMS.ID_PRODUCT = ${idProducts[i]} ${idProducts.length - 1 === Number(i) ? ')' : 'OR '}`
            }
        }

        try {
            const values = await sequelize.query(`
            SELECT SUM(value) as price FROM ITEMS JOIN PRICING USING(ID_PRICE) WHERE ITEMS.ID_ORDER = ${order}
            ${items} `)

            res.send(values[0])
        } catch (error) {
            res.sendStatus(400)
        }
    }

    public static async getParams(_: Request, res: Response) {

        try {
            res.status(200).json(await ProductsService.getParams())
        } catch (error) {
            res.status(400).json({
                error: error
            })
        }
    }

}