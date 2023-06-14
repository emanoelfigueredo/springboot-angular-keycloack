import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso-negado',
  templateUrl: './acesso-negado.component.html',
  styleUrls: ['./acesso-negado.component.css']
})
export class AcessoNegadoComponent implements OnInit {

  public classe: string = "cor-vermelha";

  ngOnInit(): void {
    this.obterClasseErro();
  }

  public async obterClasseErro() {
    while(true) {
      if(this.classe == "cor-vermelha") {
        this.classe = "cor-branca";
      } else {
        this.classe = "cor-vermelha";
      }
      await this.delay(500);
    }
  }

  public delay(ms: number): any {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
