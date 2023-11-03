import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IAuthService } from '../../domain/interfaces/auth.service.interface';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private usersRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  validate(username: string, pass: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  login(user: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
