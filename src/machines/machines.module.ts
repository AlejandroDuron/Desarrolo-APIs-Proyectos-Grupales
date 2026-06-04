import { Module } from '@nestjs/common';
import { MachinesController } from './machines.controller';
import { MachinesService } from './machines.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MachineEntity } from './machine.entity';
import { RentalEntity } from 'src/rentals/rental.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MachineEntity, RentalEntity])],
  controllers: [MachinesController],
  providers: [MachinesService]
})
export class MachinesModule {}
