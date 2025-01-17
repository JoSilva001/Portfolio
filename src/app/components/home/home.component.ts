
import { Component } from '@angular/core';
import { HomeNavigationBarComponent } from '../home-navigation-bar/home-navigation-bar.component';
import { FormGroup, FormBuilder,  Validators, ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  HostListener, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  animations: [
],
  imports: [HomeNavigationBarComponent,FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {
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

  @HostListener('window:scroll', ['$event'])
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
    const formData = new FormData();
    formData.append('email', this.formulario.get('email')?.value);
    formData.append('mensagem', this.formulario.get('mensagem')?.value);
      
 
    this.http.post('https://formspree.io/f/mrbboorl', formData)
    console.log(formData);
    
    }
    else{
      this.submitted = true;
      this.formulario.markAllAsTouched();
      return
    }
  }  
    
}
