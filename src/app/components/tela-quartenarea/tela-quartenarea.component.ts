import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tela-quartenarea',
  templateUrl: './tela-quartenarea.component.html',
  styleUrls: ['./tela-quartenarea.component.scss']
})
export class TelaQuartenareaComponent {

  constructor(private router: Router) {}

  Sair() {
    localStorage.removeItem('estalogado');
    this.router.navigate(['/login']);
  }

}
