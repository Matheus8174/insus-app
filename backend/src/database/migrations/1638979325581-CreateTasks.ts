import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey
} from 'typeorm';

class CreateTasks1638979325581 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tasks',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()'
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'done',
            type: 'boolean',
            isNullable: false,
            default: false
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    );

    await queryRunner.addColumn(
      'tasks',
      new TableColumn({
        name: 'columns_id',
        type: 'uuid',
        generationStrategy: 'uuid',
        default: 'gen_random_uuid()',
        isNullable: true
      })
    );

    await queryRunner.createForeignKey(
      'tasks',
      new TableForeignKey({
        name: 'TaskProvider',
        columnNames: ['columns_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'columns',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('tasks', 'taskProvider');

    await queryRunner.dropColumn('tasks', 'columns_id');

    await queryRunner.dropTable('tasks');
  }
}

export default CreateTasks1638979325581;
