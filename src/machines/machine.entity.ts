import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import { UserEntity } from "src/users/user.entity";
import { RentalEntity } from "src/rentals/rental.entity";

@Entity()
export class MachineEntity {
       @PrimaryGeneratedColumn()
       id: number;

       @ManyToOne(() => UserEntity, (user)=> user.machines, {eager: true})
       user: UserEntity;

       @OneToMany(() => RentalEntity, (rental) => rental.machine)
       rentals: RentalEntity[];
}
