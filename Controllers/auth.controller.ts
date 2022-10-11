import { Response, Request } from 'express';
import jwt from 'jsonwebtoken';

export class AuthController {

    public static async JwtGenerator(payload: any) {
        const secretKey: any = process.env.JWT_SECRET;

        return jwt.sign(payload, secretKey, {
            expiresIn: process.env.JWT_EXPIRET
        })
    }

    public static async JwtValidator(req: Request, res: Response){

        const { body } = req;
        const secretKey: any = process.env.JWT_SECRET
        const token: string = body.token;
        console.log('Token: ', token);

        if(!token){
            return res.status(401).json({
                ok: false,
                error: 'Empty token'
            })
        }

        try {
            jwt.verify( token, secretKey );
            res.status(200).json({
                ok: true,
                msg: 'Valid token',
                token
            })

        } catch (error) {
            res.status(400).json({
                ok: false,
                error: 'Invalid token'
            })

        }
    }
}