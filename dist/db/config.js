"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('ADAIALAB_PRUEBA0', 'username', 'password', {
    dialect: 'sqlite',
    host: './ADAIALAB_PRUEBA.sqlite',
});
