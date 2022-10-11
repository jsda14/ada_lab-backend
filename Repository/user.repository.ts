import { Response, Request } from "express";
import { User } from "../Models/User";
import bcrypt from "bcryptjs";

export class UserRepository{

    public static async createUser( req: Request, res: Response){
        const { body } = req;
        body.password = await bcrypt.hash(body.password, 10)

        let userCreated = await User.create(body);

        return userCreated;
    }

    public static async getUserByEmail(email: string){

        return await User.findOne({
            where: {
                email
            }
        })
    }
}