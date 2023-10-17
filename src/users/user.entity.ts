import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Gender, UserType } from './user.enum';
import { UserAttribute } from './user-attribute.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column({ name: 'gender', type: 'enum', enum: Gender, default: Gender.Male })
  gender: string;

  @Column({ nullable: true })
  address: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true, nullable: true })
  phoneNumber: number;

  @Column()
  type: UserType;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => UserAttribute, (userAttribute) => userAttribute.user)
  userAttributes: UserAttribute[];
}
