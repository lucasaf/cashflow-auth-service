import { User } from '../entities/user/user.entity';

export interface UserRepository {
  create(user: User): Promise<User>;
  findById(userId: string): Promise<any>;
  findByUsername(username: string): Promise<User | undefined>;
  update(userId: string, updateUserDto: any): Promise<any>;
}
