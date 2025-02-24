import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class CreateUsersDto {
    readonly full_name!: string;
    readonly email!: string;
    readonly password!: string;
}

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25, nullable: false })
  full_name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ unique: true, nullable: false })
  password: string;

  constructor(id: number, full_name: string, email: string, password: string) {
    this.id = id;
    this.full_name = full_name;
    this.email = email;
    this.password = password;
  }
}