import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgIf } from '@angular/common';
import { AppRoutingModule } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [AppRoutingModule, NavbarComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemon-hunter';

  //Inject Router for our conditional rendering of the navbar
  //Cutting a corner, making this public so the html can see it
  constructor(public router: Router) {
  }

}

