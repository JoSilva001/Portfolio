import { Component } from '@angular/core';
import { HomeNavigationBarComponent } from '../home-navigation-bar/home-navigation-bar.component';
@Component({
  selector: 'app-home',
  standalone: true,
  animations: [],
  imports: [HomeNavigationBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
