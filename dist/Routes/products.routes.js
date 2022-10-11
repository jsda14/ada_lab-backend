"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = require("../Controllers/products.controller");
const router = (0, express_1.Router)();
router.get('/getPrices', products_controller_1.ProductsController.getProducts);
exports.default = router;
