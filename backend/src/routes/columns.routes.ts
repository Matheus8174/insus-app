import { Router } from 'express';

import ColumnController from '../controllers/columnController';

const columnController = new ColumnController();

const columnRouter = Router();

columnRouter.post('/', columnController.create);
columnRouter.get('/', columnController.listAll);
columnRouter.delete('/:id', columnController.remove);

export default columnRouter;
