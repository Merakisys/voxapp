import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { OnboardingService } from './onboarding.service';

@Injectable({ providedIn: 'root' })
export class OnboardingGuard implements CanActivate {
  constructor(private ob: OnboardingService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    return this.ob.isDone() ? this.router.parseUrl('/tabs/home') : true;
  }
}
