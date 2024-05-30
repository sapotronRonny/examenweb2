import { PrismaClient } from "@prisma/client";
import {Request, Response} from 'express';

const prisma = new PrismaClient();

export const getAllPACIENTES = async (req: Request, res: Response) => {
  try {
    const pacientes = await prisma.paciente.findMany();
    res.status(200).json(pacientes);
  } catch (error: any) {
    res.status(500).json({ message: 'Error al obtener los pacientes', error: error.message });
  }
};

  // crear un nuevo paciente
  export const createpaciente = async (req: Request, res: Response) => {
    const { nombre, CI_paciente,sucursal } = req.body;
    try {
      const nuevoPaciente = await prisma.paciente.create({
        data: 
        {
          nombre,
          CI_paciente,
          sucursal,
        },
      });
      res.status(201).json(nuevoPaciente);
    } catch (error: any) {
      res.status(500).json({ message: 'Error al crear el paciente', error: error.message });
    }
  };

  // MEOTDO PUT
  export const updateSucursalPaciente = async (req: Request, res: Response) => {
    const { ids, sucursalOrigenId, sucursalDestinoId } = req.body;
  
    try {
      // Verificar que todos los IDs pertenezcan a la sucursal de origen
      const count = await prisma.paciente.count({
        where: {
          id_paciente: {
            in: ids,
          },
          sucursal: sucursalOrigenId,
        },
      });
  
      if (count !== ids.length) {
        return res.status(400).json({ message: 'No todos los IDs corresponden a la sucursal de origen' });
      }
  
      // Actualizar la sucursal de cada paciente al destino especificado
      await prisma.paciente.updateMany({
        where: {
          id_paciente: {
            in: ids,
          },
        },
        data: {
          sucursal: sucursalDestinoId,
        },
      });
  
      res.status(200).json({ message: 'La sucursal de los pacientes ha sido actualizada correctamente' });
    } catch (error: any) {
      res.status(500).json({ message: 'Error al actualizar la sucursal de los pacientes', error: error.message });
    }
  };

  