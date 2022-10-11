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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const users_service_1 = require("../services/users.service");
const exceptionResponse_1 = require("../utils/Constants/exceptionResponse");
const serviceResponse_1 = require("../utils/Constants/serviceResponse");
const customException_1 = require("../utils/Exceptions/customException");
class UserController {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findEmail = yield users_service_1.UsersService.login(req, res);
                res.status(200).json(findEmail);
            }
            catch (error) {
                res.status(400).json({
                    error: error
                });
            }
        });
    }
    static getUserByEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserController.getUserByEmail(req, res);
                res.status(200).json(user);
            }
            catch (error) {
                res.status(400).json({
                    error: error
                });
            }
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield users_service_1.UsersService.createUser(req, res);
                return res.status(200).json({ status: `${serviceResponse_1.ServiceResponse.UserCreated}` });
            }
            catch (error) {
                if (error instanceof customException_1.CustomException)
                    return res.status(400).json({ error: error.message });
                return res.status(400).json({ error: exceptionResponse_1.ExceptionResponse.GenericResponse });
            }
        });
    }
}
exports.UserController = UserController;
