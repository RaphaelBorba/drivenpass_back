import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './userDTO';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository) { }

    async createUser(body: CreateUserDTO) {

        const existEmail = await this.userRepository.findUserByEmail(body.email)

        if (existEmail) throw new HttpException('Email já cadastrado', HttpStatus.BAD_REQUEST);

        body = { ...body, password: this.hashPassword(body.password) }

        await this.userRepository.createUser(body)
    }

    hashPassword(password: string) {

        return bcrypt.hashSync(password, 8)
    }
}
