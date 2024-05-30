import { Router} from 'express';
import { getAllPACIENTES, createpaciente, updateSucursalPaciente } from '../controladores/controladorpaciente';

const router = Router();

router.get('/', getAllPACIENTES);
router.post('/',createpaciente);
router.put('/',updateSucursalPaciente)

export default router;