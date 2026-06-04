import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { RentalEntity, RentalStatus } from 'src/rentals/rental.entity';
import { MachineEntity } from './machine.entity';

@Injectable()
export class MachinesService {
	constructor(
		@InjectRepository(MachineEntity)
		private machinesRepository: Repository<MachineEntity>,
		@InjectRepository(RentalEntity)
		private rentalsRepository: Repository<RentalEntity>,
	) {}

	async deleteMachine(id: number): Promise<void> {
		const machine = await this.machinesRepository.findOne({ where: { id } });
		if (!machine) {
			throw new NotFoundException(`Maquina con ID ${id} no encontrada`);
		}

		const activeCount = await this.rentalsRepository.count({
			where: {
				machine: { id },
				status: In([RentalStatus.PENDING, RentalStatus.APPROVED]),
			},
		});

		if (activeCount > 0) {
			throw new BadRequestException(
				'No se puede eliminar la maquina porque tiene solicitudes activas',
			);
		}

		await this.machinesRepository.delete(id);
	}
}
