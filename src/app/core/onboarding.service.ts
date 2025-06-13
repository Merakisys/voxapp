
import { Injectable } from '@angular/core';

const FLAG = 'onboarding-done';

@Injectable({ providedIn: 'root' })
export class OnboardingService {
  isDone(): boolean {
    return localStorage.getItem(FLAG) === 'true';
  }
  markDone(): void {
    localStorage.setItem(FLAG, 'true');
  }
}
