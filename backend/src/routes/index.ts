import { Router } from 'express';

import tasksRouter from './tasks.routes';
import columnRouter from './columns.routes';

const routes = Router();

const prefixRoutes = '/api/v1';

routes.use(`${prefixRoutes}/columns`, columnRouter);
routes.use(`${prefixRoutes}/tasks`, tasksRouter);

export default routes;
