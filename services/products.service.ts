import { Response, Request } from "express";
import { ProductsRepository } from '../Repository/products.repository';
import { ProductTypeEnum } from "../utils/Enums/productType";

export class ProductsService {

    public static async getProducts(req: Request, res: Response) {
        return await ProductsRepository.getProducts(req, res);
    }

    public static async getParams() {
        const params = ProductTypeEnum.getProductsType()

        return params;
    }

}