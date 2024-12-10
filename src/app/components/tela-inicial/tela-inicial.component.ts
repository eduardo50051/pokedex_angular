import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent {

  constructor(private router: Router) {}

  Sair() {
    localStorage.removeItem('estalogado');
    this.router.navigate(['/login']);
  }

}
