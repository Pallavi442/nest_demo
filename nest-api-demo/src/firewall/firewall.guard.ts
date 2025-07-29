import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()

//Guard code 
export class FirewallGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req=context.switchToHttp().getRequest();
    return req.body.name==='Pallavi';
    return false;
  }
}
