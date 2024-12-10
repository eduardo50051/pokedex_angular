import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 usuario: string = '';
 senha: string = '';


 private credenciaisValidas = {
   usuario: '123',
   senha: '123',
 };

 constructor(private router: Router) {}

 
 Entrar() {
   if ( this.usuario === this.credenciaisValidas.usuario && this.senha === this.credenciaisValidas.senha) {
    
    

    localStorage.setItem('estalogado', 'true');

    this.router.navigate(['/home']);
   
  } 
  
  else {
     
    alert('Usuário ou senha incorretos!');
   
  
  }
 }




}
