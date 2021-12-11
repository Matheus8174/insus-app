import { EntityRepository, Repository } from 'typeorm';

import Columns from '../models/columns';

type createMethodParam = {
  name: string;
  priority: number;
};

@EntityRepository(Columns)
class ColumnRepository extends Repository<Columns> {
  public async findByName(name: string) {
    const column = await this.findOne({ where: { name } });

    return column;
  }

  public async findByPriority(priority: number) {
    const column = await this.findOne({ where: { priority } });

    return column;
  }

  public async createColumn(data: createMethodParam): Promise<Columns> {
    const newColumn = this.create(data);

    await this.save(newColumn);

    return newColumn;
  }
}

export default ColumnRepository;
