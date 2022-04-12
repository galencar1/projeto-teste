import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';//Prepara a Aplicação para ser executada em Browser
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [//Dentro do declarations listamos todos os componentes, diretivas e pipes que vamos utilizar nesse módulo
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [// Colocamos outros módulos que queremos utilizar nesse módulo.(ngModule)
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CursosModule
  ],
  providers: [],// Colocamos os serviços que ficarão disponíveis para todos os componentes
  bootstrap: [AppComponent] // É o componente que é instanciado ao iniciar a aplicação;
})
export class AppModule { }
