import { Router} from 'express';
import { getALLRESULTADO, createResultado } from '../controladores/controladorresultado';

const router = Router();

router.get('/', getALLRESULTADO);
router.post('/',createResultado);

export default router;