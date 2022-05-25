import {Tags, Get, Route, Post, Body} from "tsoa";
import LoginService from "../service/login.service";
import { User } from '@prisma/client';

@Tags("Login Handler")
@Route("login")
export default class LoginController{
    @Post("/")
    public async login(@Body() body: User): Promise<User|any> {
        const service = new LoginService();
        return service.login(body);
    }
}

export {LoginController}