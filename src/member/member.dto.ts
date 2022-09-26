import { IsNumber, IsString } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  name: string;
  @IsString()
  birth: string;
}

export class UpdateMemberDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
  @IsString()
  birth: string;
}

export class CreateChildMemberDto {
  @IsNumber()
  parentId: number;
  @IsString()
  name: string;
  @IsString()
  birth: string;
}
