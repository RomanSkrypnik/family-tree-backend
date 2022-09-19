import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1663612780469 implements MigrationInterface {
    name = 'createTables1663612780469'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`members\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`couples\` (\`id\` int NOT NULL, \`user1Id\` int NULL, \`user2Id\` int NULL, UNIQUE INDEX \`REL_65ce4e61aa7d00d9a2a528b049\` (\`user1Id\`), UNIQUE INDEX \`REL_888a1eaba963de74fd8aebcd0c\` (\`user2Id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`children\` (\`id\` int NOT NULL, \`coupleId\` int NULL, \`memberId\` int NULL, UNIQUE INDEX \`REL_a26609f2457211e93ecd652eee\` (\`memberId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`couples\` ADD CONSTRAINT \`FK_65ce4e61aa7d00d9a2a528b0497\` FOREIGN KEY (\`user1Id\`) REFERENCES \`members\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`couples\` ADD CONSTRAINT \`FK_888a1eaba963de74fd8aebcd0c8\` FOREIGN KEY (\`user2Id\`) REFERENCES \`members\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`children\` ADD CONSTRAINT \`FK_5b9aed9dfd5a316667a5dfc323d\` FOREIGN KEY (\`coupleId\`) REFERENCES \`couples\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`children\` ADD CONSTRAINT \`FK_a26609f2457211e93ecd652eeec\` FOREIGN KEY (\`memberId\`) REFERENCES \`members\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`children\` DROP FOREIGN KEY \`FK_a26609f2457211e93ecd652eeec\``);
        await queryRunner.query(`ALTER TABLE \`children\` DROP FOREIGN KEY \`FK_5b9aed9dfd5a316667a5dfc323d\``);
        await queryRunner.query(`ALTER TABLE \`couples\` DROP FOREIGN KEY \`FK_888a1eaba963de74fd8aebcd0c8\``);
        await queryRunner.query(`ALTER TABLE \`couples\` DROP FOREIGN KEY \`FK_65ce4e61aa7d00d9a2a528b0497\``);
        await queryRunner.query(`DROP INDEX \`REL_a26609f2457211e93ecd652eee\` ON \`children\``);
        await queryRunner.query(`DROP TABLE \`children\``);
        await queryRunner.query(`DROP INDEX \`REL_888a1eaba963de74fd8aebcd0c\` ON \`couples\``);
        await queryRunner.query(`DROP INDEX \`REL_65ce4e61aa7d00d9a2a528b049\` ON \`couples\``);
        await queryRunner.query(`DROP TABLE \`couples\``);
        await queryRunner.query(`DROP TABLE \`members\``);
    }

}
