"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controladorresultado_1 = require("../controladores/controladorresultado");
const router = (0, express_1.Router)();
router.get('/', controladorresultado_1.getALLRESULTADO);
router.post('/', controladorresultado_1.createResultado);
exports.default = router;
