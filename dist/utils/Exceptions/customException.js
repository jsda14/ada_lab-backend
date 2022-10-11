"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomException = void 0;
class CustomException extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, CustomException.prototype);
    }
}
exports.CustomException = CustomException;
