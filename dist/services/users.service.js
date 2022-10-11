"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const user_repository_1 = require("../Repository/user.repository");
const exceptionResponse_1 = require("../utils/Constants/exceptionResponse");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const customException_1 = require("../utils/Exceptions/customException");
const auth_controller_1 = require("../Controllers/auth.controller");
class UsersService {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const findEmail = yield user_repository_1.UserRepository.getUserByEmail(body.email);
            if (findEmail === null) {
                res.status(400).json({ error: exceptionResponse_1.ExceptionResponse.UserDontExist });
            }
            else {
                const validationPassword = yield bcryptjs_1.default.compare(body.password, findEmail === null || findEmail === void 0 ? void 0 : findEmail.getDataValue('password'));
                if (!validationPassword) {
                    res.status(401).json({ error: exceptionResponse_1.ExceptionResponse.PasswordIncorrect });
                }
                else {
                    const infoValidate = {
                        id: `${findEmail === null || findEmail === void 0 ? void 0 : findEmail.getDataValue('userId')}`,
                        name: `${findEmail === null || findEmail === void 0 ? void 0 : findEmail.getDataValue('name')}`,
                        email: `${findEmail === null || findEmail === void 0 ? void 0 : findEmail.getDataValue('email')}`,
                    };
                    res.send({
                        name: infoValidate.name,
                        token: yield auth_controller_1.AuthController.JwtGenerator(infoValidate)
                    });
                }
            }
        });
    }
    static getUserByEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            return yield user_repository_1.UserRepository.getUserByEmail(body.email);
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const findEmail = yield user_repository_1.UserRepository.getUserByEmail(body.email);
            if (findEmail !== null) {
                throw new customException_1.CustomException(exceptionResponse_1.ExceptionResponse.UserExist);
            }
            return yield user_repository_1.UserRepository.createUser(req, res);
        });
    }
}
exports.UsersService = UsersService;
