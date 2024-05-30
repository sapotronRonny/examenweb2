"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controladortest_1 = require("../controladores/controladortest");
const router = (0, express_1.Router)();
router.get('/', controladortest_1.getAlltest);
router.post('/', controladortest_1.createtest);
exports.default = router;
