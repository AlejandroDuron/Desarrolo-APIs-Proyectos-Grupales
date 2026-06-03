import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import { MachineEntity } from "src/machines/machine.entity";
import { UserEntity } from "src/users/user.entity";

export class RentalEntity {
       @PrimaryGeneratedColumn()
       id: number;

       @ManyToOne(() => UserEntity, (user) => user.rentals)
       user: UserEntity;

       @ManyToOne(() => MachineEntity, (machine) => machine.rentals)
       machine: MachineEntity;
}
