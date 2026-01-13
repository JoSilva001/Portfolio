
import { HomeNavigationBarComponent } from '../home-navigation-bar/home-navigation-bar.component';
import { FormGroup, FormBuilder,  Validators, ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  HostListener, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-home',
  standalone: true,
  animations: [
],
  imports: [HomeNavigationBarComponent,FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule, CardModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent implements OnInit{
  submitted: boolean = false;
  isVisible = false;
  formulario: FormGroup = new FormGroup({});
  formspreeUrl = 'https://formspree.io/f/mrbboorl'; 
  dados = this.formulario.value;
  constructor(private formBuilder: FormBuilder,private http: HttpClient) {} 
  ngOnInit():void{
   
    this.formulario = this.formBuilder.group({
     email: ['', [Validators.required,Validators.email]],
      mensagem: ['', [Validators.required]],
    });
  }

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
//  @HostListener('window:scroll', ['$event'])
  @HostListener('window:scroll')
  onScroll(): void {
    if (this.isVisible) return;

    const element = this.animatedElement.nativeElement;
    const rect = element.getBoundingClientRect();

    // Verifica se o elemento está visível na janela de visualização
    const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
    this.isVisible = isInView;
  }
    
  exibirErro(campoForm:any){
    const errors = campoForm?.errors;
    return (this.submitted &&campoForm?.touched) ? errors : null;
  }
  onConfirmar(): void {
    if (this.formulario.valid) {
      const formData = {
        email: this.formulario.get('email')?.value,
        mensagem: this.formulario.get('mensagem')?.value,
      };
    
      this.http.post('https://formspree.io/f/mrbboorl', formData, {
        headers: { 'Content-Type': 'application/json' },
      }).subscribe({
        next: (response) => {
          console.log('Formulário enviado com sucesso:', response);
    
          // Redireciona manualmente para a página de agradecimento do Formspree
          window.location.href = 'https://formspree.io/thanks?language=pt';
        },
        error: (err) => {
          console.error('Erro ao enviar o formulário:', err);
        },
      });
    }
    else{
      this.submitted = true;
      this.formulario.markAllAsTouched();
      return
    }
  }  
    
}
