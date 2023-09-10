import {Component, Input} from '@angular/core';
import {Depoimento} from "../../core/types/type";

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss']
})
export class CardDepoimentoComponent {

  @Input() depoimento!: Depoimento;

}
