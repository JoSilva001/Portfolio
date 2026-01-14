
import { ElementRef, ViewChild,Component,HostListener} from '@angular/core';


import { CommonModule, ViewportScroller } from '@angular/common'
import { MenuItem } from 'primeng/api';

import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { TieredMenu } from 'primeng/tieredmenu';

@Component({
  selector: 'app-home-navigation-bar',
  standalone: true,
  imports: [ CommonModule, TieredMenuModule, ButtonModule],
  templateUrl: './home-navigation-bar.component.html',
  styleUrl: './home-navigation-bar.component.scss'
})
export class HomeNavigationBarComponent {
  currentSection: string = 'inicio'; // Inicializa a seção atual como 'home'
  menuAberto = false;
    @ViewChild('menu') menu!: TieredMenu;

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

  // ngAfterViewInit() {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('in-view');
  //       } else {
  //         entry.target.classList.remove('in-view');
  //       }
  //     });
  //   });

  //   observer.observe(this.animatedContainer.nativeElement);
  // }

  createWhatsappLink() {
 
    const telefone = '5561994384424';
  
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
    const baseUrl = isMobile
      ? 'https://api.whatsapp.com/send'
      : 'https://web.whatsapp.com/send';
  
    return `${baseUrl}?phone=${telefone}`;
  }


  
  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('section');
    // Percorre todas as seções para verificar qual está visível
    sections.forEach((section: HTMLElement) => {
      const rect = section.getBoundingClientRect();
      const id = section.getAttribute('id');

      // Verifica se a seção está visível no viewport
      if (rect.top < window.innerHeight && rect.bottom > 0)  {
        this.currentSection = id ? id : '';
      }

    });
  }
    items: MenuItem[] = [
    {
      label: 'Início',
      icon: 'pi pi-home',
      routerLink: '/'
    },
    {
      label: 'Produtos',
      icon: 'pi pi-shopping-cart',
      items: [
        {
          label: 'Masculino',
          routerLink: '/produtos/masculino'
        },
        {
          label: 'Feminino',
          routerLink: '/produtos/feminino'
        }
      ]
    },
    {
      label: 'Contato',
      icon: 'pi pi-envelope',
      routerLink: '/contato'
    }
  ];
  toggleMenu(event: Event) {
    this.menuAberto = !this.menuAberto;
    this.menu.toggle(event);
  }

}

