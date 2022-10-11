import { Router } from "express";
import { UserController } from "../Controllers/users.controller";
import { AuthController } from "../Controllers/auth.controller";

const router = Router();

router.post('/login', UserController.login);
router.post('/createUser', UserController.createUser);
router.post('/validarToken', AuthController.JwtValidator);

export default router;