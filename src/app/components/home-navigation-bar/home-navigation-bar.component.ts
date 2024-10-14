
import { ElementRef, ViewChild,Component,HostListener} from '@angular/core';


import { CommonModule, ViewportScroller } from '@angular/common'

@Component({
  selector: 'app-home-navigation-bar',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './home-navigation-bar.component.html',
  styleUrl: './home-navigation-bar.component.scss'
})
export class HomeNavigationBarComponent {
  currentSection: string = 'inicio'; // Inicializa a seção atual como 'home'
 constructor(private viewportScroller: ViewportScroller, private elRef: ElementRef){}

 @ViewChild('animatedContainer') animatedContainer!: ElementRef;

 irParaSecao(sectionId: string){
  const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -50; // Ajuste de deslocamento opcional (exemplo para cabecalhos fixos)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      // Suavizar o scroll manualmente
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

 




  
  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = this.elRef.nativeElement.querySelectorAll('section');
    
    // Percorre todas as seções para verificar qual está visível
    console.log(sections);
    
    sections.forEach((section: HTMLElement) => {
      const rect = section.getBoundingClientRect();
      const id = section.getAttribute('id');

      // Verifica se a seção está visível no viewport
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        this.currentSection = id ? id : '';
      }
    });
  }

}

