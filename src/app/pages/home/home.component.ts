import {Component, OnInit} from '@angular/core';
import { PromocaoService } from "../../core/services/promocao.service";
import {Promocao} from "../../core/types/type";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  promocoes!: Promocao[];

  constructor(
    private promocaoService: PromocaoService
  ) {
  }

  ngOnInit(): void {
    this.promocaoService.listar().subscribe(res => {
      this.promocoes = res;
    })
  }

}
