import { Module } from '@nestjs/common';

import { UserService } from '../application/services/user.service';
import { UserRepositoryService } from '../infrastructure/repositories/user-repository.service';

@Module({
  providers: [
    UserService,
    { provide: UserRepositoryService, useClass: UserRepositoryService },
  ],
  exports: [UserService, UserRepositoryService],
})
export class DomainModule {}
