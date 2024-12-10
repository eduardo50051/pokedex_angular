import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-tercearea',
  templateUrl: './tela-tercearea.component.html',
  styleUrls: ['./tela-tercearea.component.scss']
})
export class TelaTerceareaComponent {

  constructor(private router: Router) {}

  Sair() {
    localStorage.removeItem('estalogado');
    this.router.navigate(['/login']);
  }

}
