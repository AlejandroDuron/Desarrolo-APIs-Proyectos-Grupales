import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { UserEntity } from 'src/users/user.entity';
import { RentalEntity } from 'src/rentals/rental.entity';

export enum MachineStatus {
       DISPONIBLE = 'Disponible',
       ALQUILADA = 'Alquilada',
       EN_TALLER = 'En Taller',
}

@Entity()
export class MachineEntity {
       @PrimaryGeneratedColumn()
       id: number;

       @Column()
       name: string;

       @Column()
       description: string;

       @Column('decimal', { precision: 10, scale: 2, default: 0 })
       price: number;

       @Column({
              type: 'enum',
              enum: MachineStatus,
              default: MachineStatus.EN_TALLER,
       })
       status: MachineStatus;

       @ManyToOne(() => UserEntity, (user)=> user.machines, {eager: true})
       user: UserEntity;

       @OneToMany(() => RentalEntity, (rental) => rental.machine)
       rentals: RentalEntity[];
}
