import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/config";

export class User extends Model {}

User.init({
    userId: {
        field: 'USER_ID',
        primaryKey: true,
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4
    },
    name:{
        field: 'NAME',
        type: DataTypes.STRING
    },
    email:{
        field: 'EMAIL',
        type: DataTypes.STRING
    },
    password:{
        field: 'PASSWORD',
        type: DataTypes.STRING
    }
},{
    timestamps: false,
    sequelize,
    modelName: 'USERS',
    tableName: 'USERS'
})