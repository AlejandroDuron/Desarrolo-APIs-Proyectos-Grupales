import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { MachineEntity } from "src/machines/machine.entity";
import { RentalEntity } from "src/rentals/rental.entity";

@Entity()
export class UserEntity {
       @PrimaryGeneratedColumn()
       id: number;

       @Column()
       name: string;

       @Column()
       email: string;

       @Column({
       type: 'enum',
       enum: ['customer', 'admin'],
       default: 'customer',
       })
       role: 'customer' | 'admin';

       @OneToMany(() => MachineEntity, (machine) => machine.user)
       machines: MachineEntity[];

       @OneToMany(() => RentalEntity, (rental) => rental.user)
       rentals: RentalEntity[];
}
