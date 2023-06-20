import { listCardsRightTrigger, listCardsTrigger } from 'src/app/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    listCardsTrigger,
    listCardsRightTrigger
  ]
})
export class HomeComponent {

}
