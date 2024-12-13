import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TelaSecundariaComponent } from './components/tela-secundaria/tela-secundaria.component';
import { TelaTerceareaComponent } from './components/tela-tercearea/tela-tercearea.component';
import { TelaQuartenareaComponent } from './components/tela-quartenarea/tela-quartenarea.component';
import { LoginComponent } from './components/login/login.component';
import { ShowroomComponent } from './components/showroom/showroom.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    HeaderComponent,
    FooterComponent,
    TelaSecundariaComponent,
    TelaTerceareaComponent,
    TelaQuartenareaComponent,
    LoginComponent,
    ShowroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
