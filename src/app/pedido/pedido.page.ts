import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  cli: string;

public novo(){

  this.cli = "Pedido Realizado Com Sucesso";
}



}

