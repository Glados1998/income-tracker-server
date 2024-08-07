import {Controller, Delete, Get, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    login() {
        return 'login';
    }

    @Post('register')
    register() {
        return 'register';
    }

    @Get('profile')
    profile() {
        return 'profile';
    }

    @Delete('delete')
    delete() {
        return 'delete';
    }
}
