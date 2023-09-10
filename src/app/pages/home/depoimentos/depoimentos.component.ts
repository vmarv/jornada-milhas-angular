import {Component, Input, OnInit} from '@angular/core';
import { DepoimentoService } from "../../../core/services/depoimento.service";
import {Depoimento} from "../../../core/types/type";

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit{

  depoimentos: Depoimento[] = [];
  constructor(
    private depoimentoService: DepoimentoService
  ) {
  }

  ngOnInit(): void {
    this.depoimentoService.listar().subscribe(
      res => {
        this.depoimentos = res;
      }
    )
  }

}
