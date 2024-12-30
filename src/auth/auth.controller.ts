import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  register() {
    return this.authService.register();
  }

  login() {
    this.authService.login();
  }
}
