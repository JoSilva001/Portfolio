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

  irParaSecao(sectionId: string){
    const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -50; // Ajuste de deslocamento opcional (exemplo para cabecalhos fixos)
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
        // Suavizar o scroll manualmente
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
}
