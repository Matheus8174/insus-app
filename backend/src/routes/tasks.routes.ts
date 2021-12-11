import { Router } from 'express';

import TasksController from '../controllers/taskController';

const tasksController = new TasksController();

const taskRouter = Router();

taskRouter.post('/', tasksController.create);
taskRouter.get('/', tasksController.listAll);
taskRouter.delete('/:id', tasksController.remove);

export default taskRouter;
