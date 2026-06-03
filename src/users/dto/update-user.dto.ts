import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto{
       @ApiProperty({example: 'juan.perez01@example.com', description: 'Correo electronico del usuario'})
       email: string;
}