import { Injectable } from '@nestjs/common';
import { IUserService } from '../../domain/interfaces/user.service.interface';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class UserService implements IUserService {
  constructor(private userRepository: UserRepository) {}

  create(createUserDto: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  findById(userId: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  update(userId: string, updateUserDto: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
