import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/appError';
import ColumnRepository from '../repositories/ColumnRepository';

class ColumnController {
  public async create(request: Request, response: Response) {
    const { name, priority } = request.body;

    const columnRepository = getCustomRepository(ColumnRepository);

    const findColumnWithSameName = await columnRepository.findByName(name);

    if (findColumnWithSameName) {
      throw new AppError('already have a column with this name', 400);
    }

    const findColumnWithPriority = await columnRepository.findByPriority(
      priority
    );

    if (findColumnWithPriority) {
      throw new AppError('already have a column with this priority', 400);
    }

    const newColumn = await columnRepository.createColumn({
      name,
      priority: Number(priority)
    });

    return response.status(201).json(newColumn);
  }

  public async remove(request: Request, response: Response) {
    const { id } = request.params;

    const columnRepository = getCustomRepository(ColumnRepository);

    const deletedColumn = (await columnRepository.delete(id)).affected;

    if (!deletedColumn) {
      throw new AppError('Column does not exist', 409);
    }

    return response.sendStatus(200);
  }

  public async listAll(request: Request, response: Response) {
    const columnRepository = getCustomRepository(ColumnRepository);

    const allColumns = await columnRepository.find();

    return response.status(200).json(allColumns);
  }
}

export default ColumnController;
