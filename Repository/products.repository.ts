import { Request, Response } from "express";
import { Products } from '../Models/Products';

export class ProductsRepository {

    public static async getProducts( req: Request, res: Response){
        return await Products.findAll()
    }

}