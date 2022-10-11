"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../db/config");
class Products extends sequelize_1.Model {
}
exports.Products = Products;
Products.init({
    idItem: {
        field: 'ID_ITEM',
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1
    },
    type: {
        field: 'TYPE',
        type: sequelize_1.DataTypes.STRING
    },
    name: {
        field: 'NAME',
        type: sequelize_1.DataTypes.STRING
    },
    idPrice: {
        field: 'ID_PRICE',
        type: sequelize_1.DataTypes.INTEGER
    },
    idOrder: {
        field: 'ID_ORDER',
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    timestamps: false,
    sequelize: config_1.sequelize,
    modelName: 'ITEMS',
    tableName: 'ITEMS'
});
