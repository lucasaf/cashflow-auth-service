import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class UserRepositoryService implements UserRepository {
  create(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findById(userId: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  findByUsername(username: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  update(userId: string, updateUserDto: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
