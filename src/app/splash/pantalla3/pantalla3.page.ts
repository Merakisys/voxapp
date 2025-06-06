import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { OnboardingService } from '../../core/onboarding.service';

@Component({
  selector   : 'app-pantalla3',
  standalone : true,
  imports    : [RouterModule],
  templateUrl: './pantalla3.html',
  styleUrls  : ['./style.css', './styleguide.css', './global.css'],
})
export class Pantalla3Page {
  constructor(private router: Router, private ob: OnboardingService) {}

  skip() {
    this.ob.markDone();
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }
}
