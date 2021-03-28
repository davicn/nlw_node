import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import { hashSync } from 'bcryptjs';

class UserController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const hashedPassword = hashSync(password, 8);
    console.log(hashedPassword);
    
    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ email })

    if (userAlreadyExists) {
      return response.status(400).json({
        error: "Usuário já  cadastrado"
      })
    }

    const user = usersRepository.create({ name, email,password });

    await usersRepository.save(user);

    return response.status(201).json({msg:"usuário registrado"})

  }

  async show(request: Request, response: Response){
    const usersRepository = getCustomRepository(UsersRepository);

    const all = usersRepository.find();

    return response.status(200).json(all);
  }
}

export { UserController }