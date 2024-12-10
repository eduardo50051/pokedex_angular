import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-secundaria',
  templateUrl: './tela-secundaria.component.html',
  styleUrls: ['./tela-secundaria.component.scss']
})
export class TelaSecundariaComponent {

  constructor(private router: Router) {}

  Sair() {
    localStorage.removeItem('estalogado');
    this.router.navigate(['/login']);
  }


}
