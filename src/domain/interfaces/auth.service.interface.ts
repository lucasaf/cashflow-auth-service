export interface IAuthService {
  validate(username: string, pass: string): Promise<any>;
  login(user: any): Promise<any>;
}
