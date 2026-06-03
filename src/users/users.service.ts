import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
       constructor(
              @InjectRepository(UserEntity)
              private usersRepository: Repository<UserEntity>,
       ) { }
       async createUser(name: string, email: string, role: 'customer' | 'admin'): Promise<UserEntity>{
              const nuevo = this.usersRepository.create({name, email, role});
              return this.usersRepository.save(nuevo);
       }

       async findAll(): Promise<UserEntity[]>{
              return this.usersRepository.find();
       }
       async findById(id: number): Promise<UserEntity>{
              const user = await this.usersRepository.findOne({where: {id}});
              if(!user){
                     throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
              }
              return user;
       }
       async updateUser(id: number, data: Partial<UserEntity>): Promise<UserEntity>{
              const user = await this.findById(id);
              Object.assign(user, data);
              return this.usersRepository.save(user);
       }
       async deleteUser(id: number): Promise<void>{
              const result = await this.usersRepository.delete(id);
              if (result.affected == 0){
                     throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
              }
       }
}