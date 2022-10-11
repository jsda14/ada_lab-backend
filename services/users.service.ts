import { Response, Request } from "express";
import { UserRepository } from "../Repository/user.repository";
import { ExceptionResponse } from '../utils/Constants/exceptionResponse';
import bcrypt from 'bcryptjs';
import { CustomException } from '../utils/Exceptions/customException';
import { AuthController } from "../Controllers/auth.controller";

export class UsersService {

    public static async login(req: Request, res: Response) {
        const { body } = req;
        const findEmail = await UserRepository.getUserByEmail(body.email);

        if (findEmail === null) {
            res.status(404).json({ error: ExceptionResponse.UserDontExist })
        } else {
            const validationPassword = await bcrypt.compare(body.password, findEmail?.getDataValue('password'))

            if (!validationPassword) {
                res.status(401).json({ ok: false, error: ExceptionResponse.PasswordIncorrect })
            } else {
                const infoValidate = {
                    id: `${findEmail?.getDataValue('userId')}`,
                    name: `${findEmail?.getDataValue('name')}`,
                    email: `${findEmail?.getDataValue('email')}`,
                }
                res.send({
                    ok: true,
                    name: infoValidate.name,
                    token: await AuthController.JwtGenerator(infoValidate)
                })
            }
        }
    }

    public static async getUserByEmail(req: Request, res: Response) {
        const { body } = req;

        return await UserRepository.getUserByEmail(body.email);
    }

    public static async createUser(req: Request, res: Response) {
        const { body } = req;
        const findEmail = await UserRepository.getUserByEmail(body.email);

        if (findEmail !== null) { throw new CustomException(ExceptionResponse.UserExist) }

        return await UserRepository.createUser(req, res);

    }

}