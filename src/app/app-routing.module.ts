import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { TelaSecundariaComponent } from './components/tela-secundaria/tela-secundaria.component';
import { TelaTerceareaComponent } from './components/tela-tercearea/tela-tercearea.component';
import { TelaQuartenareaComponent } from './components/tela-quartenarea/tela-quartenarea.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: '', component:TelaInicialComponent },
  { path: 'logim', component:LoginComponent },
  { path: 'tela2', component:TelaSecundariaComponent },
  { path: 'tela3', component:TelaTerceareaComponent },
  { path: 'tela4', component:TelaQuartenareaComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
