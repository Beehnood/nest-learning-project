import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    findAll() { 
        return 'This action returns all users'; }


        findUserById(id: number) {    
            
            return {
                id: id,
                name: 'John Doe',
                age: 25,
                userName: 'johndoe',

            };
         }

         findUserByUserName(name: string) {
                return {
                    id: 1,
                    name: 'John Doe',
                    age: 25,
                    userName: 'John Doe',
                };
            }
}




