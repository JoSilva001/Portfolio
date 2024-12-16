import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { Component } from '@angular/core';
import { HomeNavigationBarComponent } from '../home-navigation-bar/home-navigation-bar.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-home',
  standalone: true,
  animations: [trigger('fadeInRight', [
    transition(':enter', [ // Quando o elemento é inserido no DOM
      style({ opacity: 0, transform: 'translateX(10%)' }),
      animate('1000ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
    ])
  ]),
  trigger('fadeInLeft', [
    transition(':enter', [ // Quando o elemento é inserido no DOM
      style({ opacity: 0, transform: 'translateX(-10%)' }), // Começa fora da tela à esquerda
      animate('1000ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
    ])
  ]),
  trigger('fadeInDown', [
    transition(':enter', [ // Quando o elemento é inserido no DOM
      style({ opacity: 0, transform: 'translateY(-10%)' }), // Começa fora da tela acima
      animate('1000ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]),
  trigger('fadeInUp', [
    transition(':enter', [ // Quando o elemento é inserido no DOM
      style({ opacity: 0, transform: 'translateY(10%)' }), // Começa fora da tela abaixo
      animate('1000ms 1000ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ])
],
  imports: [HomeNavigationBarComponent,AnimateOnScrollModule],
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
    redirect(event:any){
      if(event.target.className == "pi pi-github"){
        window.open('https://github.com/JoSilva001')
      }
      else{
        window.open('https://www.linkedin.com/in/josesilvacode/')
      }
    }
    
}
