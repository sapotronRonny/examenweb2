import { PrismaClient } from "@prisma/client";
import {Request, Response} from 'express';

const prisma = new PrismaClient();

export const getALLRESULTADO = async (req: Request, res: Response) => {
    try {
      const resultados = await prisma.resultado.findMany({
        include: {
          paciente: true,
          tipo_de_examen: true,
        },
      });
      res.status(200).json(resultados);
    } catch (error: any) {
      res.status(500).json({ message: 'Error al obtener los resultados', error: error.message });
    }
  };

  // Crear un nuevo resultado
export const createResultado = async (req: Request, res: Response) => {
    const { Resultado_test, valor_paga, observaciones, paciente_id, examen_id, sucursal } = req.body;
    try {
      const nuevoResultado = await prisma.resultado.create({
        data: 
        {
          Resultado_test,
          valor_paga,
          observaciones,
          sucursal,
          paciente: { connect: { id_paciente: paciente_id } },
          tipo_de_examen: { connect: { id_examen: examen_id } }
        },
      });
      res.status(201).json(nuevoResultado);
    } catch (error: any) {
      res.status(500).json({ message: 'Error al crear el resultado', error: error.message });
    }
  };