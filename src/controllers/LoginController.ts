import { config } from "dotenv-safe";
import { Response, Request } from "express";
import jsonwebtoken from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';


class LoginController{
  async login(request: Request, response: Response, next: any){
    const { email, password } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ email })

  }
}

export { LoginController };