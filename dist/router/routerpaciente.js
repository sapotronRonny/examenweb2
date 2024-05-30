"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controladorpaciente_1 = require("../controladores/controladorpaciente");
const router = (0, express_1.Router)();
router.get('/', controladorpaciente_1.getAllPACIENTES);
router.post('/', controladorpaciente_1.createpaciente);
exports.default = router;
