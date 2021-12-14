import { MigrationInterface, QueryRunner } from 'typeorm';

class CreateColumnsTasksTablesAndRelateThem1639186192361
  implements MigrationInterface
{
  name = 'CreateColumnsTasksTablesAndRelateThem1639186192361';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "columns" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "priority" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_3bcee9fe36f8903d577cdfead3a" UNIQUE ("priority"), CONSTRAINT "PK_4ac339ccbbfed1dcd96812abbd5" PRIMARY KEY ("id"))'
    );
    await queryRunner.query(
      'CREATE TABLE "tasks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying, "done" boolean NOT NULL DEFAULT false, "columns_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))'
    );
    await queryRunner.query(
      'ALTER TABLE "tasks" ADD CONSTRAINT "FK_267129f2dead8026ea5976661fa" FOREIGN KEY ("columns_id") REFERENCES "columns"("id") ON DELETE CASCADE ON UPDATE CASCADE'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "tasks" DROP CONSTRAINT "FK_267129f2dead8026ea5976661fa"'
    );
    await queryRunner.query('DROP TABLE "tasks"');
    await queryRunner.query('DROP TABLE "columns"');
  }
}

export default CreateColumnsTasksTablesAndRelateThem1639186192361;
