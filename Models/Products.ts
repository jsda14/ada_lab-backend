import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/config";

export class Products extends Model {}

Products.init({
    idItem: {
        field: 'ID_ITEM',
        primaryKey: true,
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    type:{
        field: 'TYPE',
        type: DataTypes.STRING
    },
    name:{
        field: 'ID_PRODUCT',
        type: DataTypes.STRING
    },
    idPrice:{
        field: 'ID_PRICE',
        type: DataTypes.INTEGER
    },
    idOrder:{
        field: 'ID_ORDER',
        type: DataTypes.INTEGER
    }
},{
    timestamps: false,
    sequelize,
    modelName: 'ITEMS',
    tableName: 'ITEMS'
})