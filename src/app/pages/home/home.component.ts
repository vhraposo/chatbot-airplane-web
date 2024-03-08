import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArrowRightComponent } from '../../icons/arrow-right/arrow-right.component';
import { SparkleComponent } from '../../icons/sparkle/sparkle.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArrowRightComponent,
    SparkleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  openChat(){
    this.router.navigate(['chat'])
  }
}
