import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1664039826768 implements MigrationInterface {
    name = 'createTables1664039826768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`children\` (\`id\` int NOT NULL AUTO_INCREMENT, \`parentId\` int NOT NULL, \`userId\` int NOT NULL, UNIQUE INDEX \`REL_045e714a8906182cae37c8dab8\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`members\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`birth\` date NOT NULL, \`branchId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`branches\` (\`id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`children\` ADD CONSTRAINT \`FK_b65f0ac2a8c620dc69f8d75a4f0\` FOREIGN KEY (\`parentId\`) REFERENCES \`members\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`children\` ADD CONSTRAINT \`FK_045e714a8906182cae37c8dab89\` FOREIGN KEY (\`userId\`) REFERENCES \`members\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`members\` ADD CONSTRAINT \`FK_f496c330bf399940f4dce994d47\` FOREIGN KEY (\`branchId\`) REFERENCES \`branches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`members\` DROP FOREIGN KEY \`FK_f496c330bf399940f4dce994d47\``);
        await queryRunner.query(`ALTER TABLE \`children\` DROP FOREIGN KEY \`FK_045e714a8906182cae37c8dab89\``);
        await queryRunner.query(`ALTER TABLE \`children\` DROP FOREIGN KEY \`FK_b65f0ac2a8c620dc69f8d75a4f0\``);
        await queryRunner.query(`DROP TABLE \`branches\``);
        await queryRunner.query(`DROP TABLE \`members\``);
        await queryRunner.query(`DROP INDEX \`REL_045e714a8906182cae37c8dab8\` ON \`children\``);
        await queryRunner.query(`DROP TABLE \`children\``);
    }

}
