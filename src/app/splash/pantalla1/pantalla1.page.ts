import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector   : 'app-pantalla1',
  standalone : true,
  imports    : [RouterModule],          
  templateUrl: './pantalla1.html',
  styleUrls  : ['./style.css', './styleguide.css', './global.css'],
})
export class Pantalla1Page {}
