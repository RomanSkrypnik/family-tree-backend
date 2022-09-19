import {MigrationInterface, QueryRunner} from "typeorm";

export class createMembersTable1663609913348 implements MigrationInterface {
    name = 'createMembersTable1663609913348'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`members\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`members\``);
    }

}
