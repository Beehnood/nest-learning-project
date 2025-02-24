import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Users}  from 'src/entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private user_repository: Repository<Users>,
  ) {}

  async findAll() {
    
    return await this.user_repository.find();
  };
  createUser = async () => {
    const user = await this.user_repository.create({
      id: 1,
      full_name: 'John Doe',
      email: 'nnn@kkk.com',
      password: '123456',
    });
    this.user_repository.save(user);
    return user;

  }

  findUserById(id: number) {
    return this.user_repository.findOneBy({ id });
  }

  findUserByUserName(full_name: string) {
    return this.user_repository.findOneBy({ full_name });
  }
}