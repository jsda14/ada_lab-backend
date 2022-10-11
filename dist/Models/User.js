"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../db/config");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    userId: {
        field: 'USER_ID',
        primaryKey: true,
        type: sequelize_1.DataTypes.UUIDV4,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    name: {
        field: 'NAME',
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        field: 'EMAIL',
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        field: 'PASSWORD',
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false,
    sequelize: config_1.sequelize,
    modelName: 'USERS',
    tableName: 'USERS'
});
