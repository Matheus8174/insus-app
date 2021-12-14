import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import AppError from '../errors/appError';
import Tasks from '../models/tasks';
import Columns from '../models/columns';

class TaskController {
  public async create(request: Request, response: Response) {
    const { name, description } = request.body;

    const tasksRepository = getRepository(Tasks);

    const allColumns = await getRepository(Columns).find();

    const ColumnWithMinPriority = allColumns.reduce(
      (accumulator, currentValue) => {
        if (currentValue.priority < accumulator.priority) return currentValue;

        return accumulator;
      }
    );

    const newTask = tasksRepository.create({
      name,
      description,
      columns_id: ColumnWithMinPriority.id
    });

    try {
      await tasksRepository.save(newTask);
    } catch {
      throw new AppError('Invalid fields', 400);
    }

    return response.status(201).json(newTask);
  }

  public async remove(request: Request, response: Response) {
    const { id } = request.params;

    const tasksRepository = getRepository(Tasks);

    const deletedTask = (await tasksRepository.delete(id)).affected;

    if (!deletedTask) {
      throw new AppError('Task does not exist', 409);
    }

    return response.sendStatus(200);
  }

  public async listAll(request: Request, response: Response) {
    const tasksRepository = getRepository(Tasks);

    const allTasks = await tasksRepository.find();

    return response.status(200).json(allTasks);
  }
}

export default TaskController;
