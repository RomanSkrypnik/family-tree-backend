import {MigrationInterface, QueryRunner} from "typeorm";

export class createCouplesTable1663611285019 implements MigrationInterface {
    name = 'createCouplesTable1663611285019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`couples\` (\`id\` int NOT NULL, \`user1Id\` int NULL, \`user2Id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`couples\` ADD CONSTRAINT \`FK_3b6ad3c0687a42e697756eedf3a\` FOREIGN KEY (\`user1Id\`) REFERENCES \`member\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`couples\` ADD CONSTRAINT \`FK_cf5db4d01ffd2f29be66c88aa16\` FOREIGN KEY (\`user2Id\`) REFERENCES \`member\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`couples\` DROP FOREIGN KEY \`FK_cf5db4d01ffd2f29be66c88aa16\``);
        await queryRunner.query(`ALTER TABLE \`couples\` DROP FOREIGN KEY \`FK_3b6ad3c0687a42e697756eedf3a\``);
        await queryRunner.query(`DROP TABLE \`couples\``);
    }

}
