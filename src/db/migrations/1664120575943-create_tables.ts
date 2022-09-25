import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1664120575943 implements MigrationInterface {
    name = 'createTables1664120575943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`members\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`birth\` date NOT NULL, \`parentId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`members_closure\` (\`id_ancestor\` int NOT NULL, \`id_descendant\` int NOT NULL, INDEX \`IDX_687fe02bb08ec83d64f2e47983\` (\`id_ancestor\`), INDEX \`IDX_7c7e4dbfe281fc3c013823c0f0\` (\`id_descendant\`), PRIMARY KEY (\`id_ancestor\`, \`id_descendant\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`members\` ADD CONSTRAINT \`FK_cb9c65b617ca5fc7274d9f3bada\` FOREIGN KEY (\`parentId\`) REFERENCES \`members\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`members_closure\` ADD CONSTRAINT \`FK_687fe02bb08ec83d64f2e479833\` FOREIGN KEY (\`id_ancestor\`) REFERENCES \`members\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`members_closure\` ADD CONSTRAINT \`FK_7c7e4dbfe281fc3c013823c0f0c\` FOREIGN KEY (\`id_descendant\`) REFERENCES \`members\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`members_closure\` DROP FOREIGN KEY \`FK_7c7e4dbfe281fc3c013823c0f0c\``);
        await queryRunner.query(`ALTER TABLE \`members_closure\` DROP FOREIGN KEY \`FK_687fe02bb08ec83d64f2e479833\``);
        await queryRunner.query(`ALTER TABLE \`members\` DROP FOREIGN KEY \`FK_cb9c65b617ca5fc7274d9f3bada\``);
        await queryRunner.query(`DROP INDEX \`IDX_7c7e4dbfe281fc3c013823c0f0\` ON \`members_closure\``);
        await queryRunner.query(`DROP INDEX \`IDX_687fe02bb08ec83d64f2e47983\` ON \`members_closure\``);
        await queryRunner.query(`DROP TABLE \`members_closure\``);
        await queryRunner.query(`DROP TABLE \`members\``);
    }

}
