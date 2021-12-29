import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RightGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const user = {
      name: 'murat',
      roles: ['ordinary'],
    };

    const requiredRole = 'admin';

    if (!user.roles.includes(requiredRole)) {
      return false;
    }

    return true;
  }
}
