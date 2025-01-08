import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { TelaSecundariaComponent } from './components/tela-secundaria/tela-secundaria.component';
import { TelaTerceareaComponent } from './components/tela-tercearea/tela-tercearea.component';
import { TelaQuartenareaComponent } from './components/tela-quartenarea/tela-quartenarea.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';
import { ShowroomComponent } from './components/showroom/showroom.component';
import { GeracaoComponent } from './components/geracao/geracao.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const routes: Routes = [

  { path: '', component:LoginComponent},
  { path: 'login', component:LoginComponent},
  { path: 'home', component:TelaInicialComponent, canActivate: [authGuard] },
  { path: 'tela2', component:TelaSecundariaComponent, canActivate: [authGuard] },
  { path: 'tela3', component:TelaTerceareaComponent, canActivate: [authGuard] },
  { path: 'tela4', component:TelaQuartenareaComponent, canActivate: [authGuard] },
  { path: 'details/:id', component:ShowroomComponent, canActivate: [authGuard] },
  { path: 'geracao/:id', component:GeracaoComponent, canActivate: [authGuard] },
  { path: 'buscar', component:BuscarComponent, canActivate: [authGuard]},
  { path: '**', redirectTo: 'login' },
  
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
