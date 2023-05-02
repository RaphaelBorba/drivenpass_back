import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './userDTO';

@Injectable()
export class UserRepository {


    createUser(body: CreateUserDTO) {
        
        return this.prismaService.user.create({
            data:{
                email:body.email,
                password:body.password
            }
        })
    }

    constructor( private readonly prismaService: PrismaService){}

    findUserByEmail(email:string){

        return this.prismaService.user.findFirst({
            where:{
                email
            }
        })
    }
}
