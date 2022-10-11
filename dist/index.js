"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = __importDefault(require("./Routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const enviroment_1 = require("./global/enviroment");
const config_1 = require("./db/config");
require('dotenv').config();
const app = (0, express_1.default)();
const PORT = enviroment_1.SERVER_PORT;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/", Routes_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});
config_1.sequelize.sync().then(() => {
    console.log('Conexión a base de datos');
});
