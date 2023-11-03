import { User } from './user.entity';

describe('User Entity', () => {
  it('should create a user with all properties', () => {
    const user = new User();
    user.id = '1';
    user.username = 'testuser';
    user.password = 'hashedpassword';
    user.email = 'test@example.com';
    user.createdAt = new Date();
    user.updatedAt = new Date();

    expect(user.id).toBe('1');
    expect(user.username).toBe('testuser');
    expect(user.password).toBe('hashedpassword');
    expect(user.email).toBe('test@example.com');
    expect(user.createdAt).toBeInstanceOf(Date);
    expect(user.updatedAt).toBeInstanceOf(Date);
  });
});
