import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {AuthService} from './auth/auth.service';

@Controller("app")
export class AppController {
    constructor(
        private authService: AuthService,
        private appService: AppService
    ) {
    }

    @Get("hello")
    hello(): string {
        return this.appService.getHello();
    }

}