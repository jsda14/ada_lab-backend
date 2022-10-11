"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../Controllers/users.controller");
const router = (0, express_1.Router)();
router.post('/login', users_controller_1.UserController.login);
router.post('/createUser', users_controller_1.UserController.createUser);
exports.default = router;
