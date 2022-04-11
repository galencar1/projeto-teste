import { Component } from "@angular/core"; // Importa a biblioteca component do Angular core

@Component({
    //Aqui nós repassamos os metadados.
    selector: 'meu-primeiro-component',// Selector é a TAG HTML para chamar o component em outros components.
    template: `
        <p>Meu primeiro component com Angular 2!</p>
    `
}) //Indica para o Compilador que essa classe é um componente do Angular 2.
export class MeuPrimeiroComponent { } //Criando uma classe. Caso queira expor a classe para outros components. Deve colocar na frente Export
// Também devemos declarar os components no módulo. App.component.ts