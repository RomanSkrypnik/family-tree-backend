export interface CreateMemberDto {
  name: string;
  birth: string;
}

export interface UpdateMemberDto {
  id: number;
  name: string;
  birth: string;
}

export interface CreateChildMemberDto {
  parentId: number;
  name: string;
  birth: string;
}
