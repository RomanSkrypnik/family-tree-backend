import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1663678001337 implements MigrationInterface {
    name = 'createTables1663678001337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`members\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`children\` (\`id\` int NOT NULL AUTO_INCREMENT, \`parentId\` int NOT NULL, \`childrenId\` int NOT NULL, UNIQUE INDEX \`REL_58c0c231e32af24b7dff991656\` (\`childrenId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`children\` ADD CONSTRAINT \`FK_58c0c231e32af24b7dff991656b\` FOREIGN KEY (\`childrenId\`) REFERENCES \`members\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`children\` ADD CONSTRAINT \`FK_b65f0ac2a8c620dc69f8d75a4f0\` FOREIGN KEY (\`parentId\`) REFERENCES \`members\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`children\` DROP FOREIGN KEY \`FK_b65f0ac2a8c620dc69f8d75a4f0\``);
        await queryRunner.query(`ALTER TABLE \`children\` DROP FOREIGN KEY \`FK_58c0c231e32af24b7dff991656b\``);
        await queryRunner.query(`DROP INDEX \`REL_58c0c231e32af24b7dff991656\` ON \`children\``);
        await queryRunner.query(`DROP TABLE \`children\``);
        await queryRunner.query(`DROP TABLE \`members\``);
    }

}
