import { Router} from 'express';
import { getAlltest, createtest } from '../controladores/controladortest';

const router = Router();

router.get('/', getAlltest);
router.post('/',createtest);

export default router;