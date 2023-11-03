export interface IUserService {
  create(createUserDto: any): Promise<any>;
  findById(userId: string): Promise<any>;
  update(userId: string, updateUserDto: any): Promise<any>;
}
