import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  meuBooleano: boolean = false; // Variável booleana inicializada como false

  atualizaBooleano(valor: boolean): void {
    this.meuBooleano = valor; // Atualiza o valor da variável booleana com o valor recebido como parâmetro
  }

}
