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
exports.createResultado = exports.getALLRESULTADO = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getALLRESULTADO = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultados = yield prisma.resultado.findMany({
            include: {
                paciente: true,
                tipo_de_examen: true,
            },
        });
        res.status(200).json(resultados);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los resultados', error: error.message });
    }
});
exports.getALLRESULTADO = getALLRESULTADO;
// Crear un nuevo resultado
const createResultado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Resultado_test, valor_paga, observaciones, paciente_id, examen_id, sucursal } = req.body;
    try {
        const nuevoResultado = yield prisma.resultado.create({
            data: {
                Resultado_test,
                valor_paga,
                observaciones,
                sucursal,
                paciente: { connect: { id_paciente: paciente_id } },
                tipo_de_examen: { connect: { id_examen: examen_id } }
            },
        });
        res.status(201).json(nuevoResultado);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el resultado', error: error.message });
    }
});
exports.createResultado = createResultado;
