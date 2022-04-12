import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Contém diretivas e partes mais comuns
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent,
    CursoDetalheComponent
  ],
  providers: [CursosService]
})
export class CursosModule { }
