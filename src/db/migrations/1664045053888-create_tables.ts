import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1664045053888 implements MigrationInterface {
    name = 'createTables1664045053888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`members\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`birth\` date NOT NULL, \`mpath\` varchar(255) NULL DEFAULT '', \`parentId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`members\` ADD CONSTRAINT \`FK_cb9c65b617ca5fc7274d9f3bada\` FOREIGN KEY (\`parentId\`) REFERENCES \`members\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`members\` DROP FOREIGN KEY \`FK_cb9c65b617ca5fc7274d9f3bada\``);
        await queryRunner.query(`DROP TABLE \`members\``);
    }

}
