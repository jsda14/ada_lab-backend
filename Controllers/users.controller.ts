import { Request, Response } from "express";
import { UsersService } from "../services/users.service";
import { ExceptionResponse } from "../utils/Constants/exceptionResponse";
import { ServiceResponse } from "../utils/Constants/serviceResponse";
import { CustomException } from '../utils/Exceptions/customException';


export class UserController {

    public static async login(req: Request, res: Response) {

        try {
            const findEmail = await UsersService.login(req, res);
            res.status(200).json(findEmail)
        } catch (error) {
            res.status(400).json({
                error: error
            })
        }
    }

    public static async getUserByEmail(req: Request, res: Response) {
        try {
            const user = await UserController.getUserByEmail(req, res)
            res.status(200).json(user)
        } catch (error) {
            res.status(400).json({
                error: error
            })
        }
    }

    public static async createUser(req: Request, res: Response) {
        try {
            await UsersService.createUser(req, res)
            return res.status(200).json({
                ok: true,
                status: `${ServiceResponse.UserCreated}`
            })
        } catch (error) {
            if (error instanceof CustomException) return res.status(400).json({ ok: false, error: error.message })
            return res.status(400).json({ error: ExceptionResponse.GenericResponse });
        }
    }
}