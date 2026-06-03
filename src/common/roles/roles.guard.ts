import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../decorators/roles/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}  // 1. Inyectas Reflector

  canActivate(context: ExecutionContext): boolean {

    // 2. Lees qué roles requiere la ruta (los que pusiste con @Roles())
    const requiredRoles = this.reflector.get<string[]>(Roles, context.getHandler());

    // 3. Si la ruta no tiene @Roles(), dejas pasar
    if (!requiredRoles) return true;

    // 4. Obtienes el usuario del request (lo pone el AuthGuard/JWT)
    const { user } = context.switchToHttp().getRequest();

    // 5. Verificas si el rol del usuario coincide
    return requiredRoles.includes(user.role);
  }
}