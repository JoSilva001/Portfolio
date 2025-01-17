
import { Component } from '@angular/core';
import { HomeNavigationBarComponent } from '../home-navigation-bar/home-navigation-bar.component';

import {  HostListener, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  animations: [
],
  imports: [HomeNavigationBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isVisible = false;
  
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
  

  @ViewChild('animatedElement') animatedElement!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (this.isVisible) return;

    const element = this.animatedElement.nativeElement;
    const rect = element.getBoundingClientRect();

    // Verifica se o elemento está visível na janela de visualização
    const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
    this.isVisible = isInView;
  }
    
    
}
