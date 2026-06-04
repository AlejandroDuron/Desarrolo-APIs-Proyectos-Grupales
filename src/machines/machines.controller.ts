import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MachinesService } from './machines.service';

@ApiTags('Machines')
@Controller('machines')
export class MachinesController {
	constructor(private readonly machinesService: MachinesService) {}

	@Delete(':id')
	@ApiOperation({ summary: 'Eliminar una maquina por ID' })
	@ApiParam({ name: 'id', description: 'ID de la maquina' })
	@ApiResponse({ status: 200, description: 'Maquina eliminada correctamente.' })
	@ApiResponse({ status: 400, description: 'La maquina tiene solicitudes activas.' })
	@ApiResponse({ status: 404, description: 'Maquina no encontrada.' })
	delete(@Param('id') id: string): Promise<void> {
		return this.machinesService.deleteMachine(+id);
	}
}
