"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createpaciente = exports.getAllPACIENTES = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllPACIENTES = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacientes = yield prisma.paciente.findMany();
        res.status(200).json(pacientes);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los pacientes', error: error.message });
    }
});
exports.getAllPACIENTES = getAllPACIENTES;
// crear un nuevo paciente
const createpaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, CI_paciente, sucursal } = req.body;
    try {
        const nuevoPaciente = yield prisma.paciente.create({
            data: {
                nombre,
                CI_paciente,
                sucursal,
            },
        });
        res.status(201).json(nuevoPaciente);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el paciente', error: error.message });
    }
});
exports.createpaciente = createpaciente;
