import { PrismaClient } from "@prisma/client";
import {Request, Response} from 'express';

const prisma = new PrismaClient();


export const getAlltest = async (req: Request, res: Response) => {
    try {
      const examenes = await prisma.tipo_de_examen.findMany();
      res.status(200).json(examenes);
    } catch (error: any) {
      res.status(500).json({ message: 'Error al obtener los exámenes', error: error.message });
    }
  };


  // Crear un nuevo test
export const createtest = async (req: Request, res: Response) => {
    const { Descripcion, Indicaciones, sucursal } = req.body;
    try {
      const nuevotest = await prisma.tipo_de_examen.create({
        data: 
        {
          Descripcion,
          Indicaciones,
          sucursal,
        },
      });
      res.status(201).json(nuevotest);
    } catch (error: any) {
      res.status(500).json({ message: 'Error al crear el tipo de examen', error: error.message });
    }
  };