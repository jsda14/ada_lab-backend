"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionResponse = void 0;
class ExceptionResponse {
}
exports.ExceptionResponse = ExceptionResponse;
ExceptionResponse.GenericResponse = "Ha ocurrido un error inesperado.";
//Users
ExceptionResponse.UserExist = "El usuario ya ha sido registrado.";
ExceptionResponse.UserDontExist = "El correo no ha sido registrado.";
ExceptionResponse.PasswordIncorrect = "La contraseña o usuario ingresado es incorrecto";
