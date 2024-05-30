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
exports.createtest = exports.getAlltest = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAlltest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const examenes = yield prisma.tipo_de_examen.findMany();
        res.status(200).json(examenes);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los exámenes', error: error.message });
    }
});
exports.getAlltest = getAlltest;
// Crear un nuevo test
const createtest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Descripcion, Indicaciones, sucursal } = req.body;
    try {
        const nuevotest = yield prisma.tipo_de_examen.create({
            data: {
                Descripcion,
                Indicaciones,
                sucursal,
            },
        });
        res.status(201).json(nuevotest);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el tipo de examen', error: error.message });
    }
});
exports.createtest = createtest;
