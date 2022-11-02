import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/config";

export class Orders extends Model {}

Orders.init({
    orderId: {
        field: 'ORDER_ID',
        primaryKey: true,
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4
    },
    client:{
        field: 'CLIENT',
        type: DataTypes.STRING
    },
    date:{
        field: 'DATE',
        type: DataTypes.DATE
    },
    ai_modeling:{
        field: 'AI_MODELING',
        type: DataTypes.STRING
    },
    development_time:{
        field: 'DEVELOPMENT_TIME',
        type: DataTypes.STRING
    },
    filters:{
        field: 'FILTERS',
        type: DataTypes.STRING
    },
    input_query:{
        field: 'INPUT_QUERY',
        type: DataTypes.STRING
    },
    total:{
        field: 'TOTAL',
        type: DataTypes.INTEGER
    }
},{
    timestamps: false,
    sequelize,
    modelName: 'ORDERS',
    tableName: 'ORDERS'
})