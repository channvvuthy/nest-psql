import { Gender } from 'src/type/gender.type';
import { UserType } from 'src/type/user-type.type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('username')
  username: string;

  @Column('first_name')
  first_name: string;

  @Column('last_name')
  last_name: string;

  @Column({ type: 'date', nullable: true })
  date_of_birth: Date;

  @Column({ type: 'enum', enum: Gender, default: () => Gender.MALE })
  gender: Gender;

  @Column('address')
  address: string;

  email: string;

  @Column({ nullable: true })
  phone_number: number;

  @Column({ type: 'enum', enum: UserType, default: () => UserType.STUDENT })
  type: UserType;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;
}
