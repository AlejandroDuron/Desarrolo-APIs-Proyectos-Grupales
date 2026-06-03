import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
       @ApiProperty({example: 'Juan Perez', description: 'Nombre completo del usuario'})
       nombre: string;

       @ApiProperty({example: 'juan@example.com', description: 'Correo electronico del usuario'})
       email: string;

       @ApiProperty({example: 'admin o customer', description: 'Rol del usuario'})
       role: 'admin';
}