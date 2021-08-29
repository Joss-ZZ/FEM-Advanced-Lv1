import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisGuard implements CanActivate, CanLoad {

  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
      return true;
  }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean{
      return true;
  }
  
}
