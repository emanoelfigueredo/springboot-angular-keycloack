import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public headerLogin: boolean = true;
  public tamanhoDaTela: number =  window.innerWidth;

  public homeClicado(): void {
    this.headerLogin = false;
  }

}
