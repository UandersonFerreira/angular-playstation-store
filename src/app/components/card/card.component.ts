import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  /*
  REPASSANDO PARAMETROS DE COMPONENTES PAIS PARA FILHOS

  Basta criar no component pai os mesmo atributos que seus
  filhos têm é que deseja enviar informações, anotando os
  atributos com @Input() para dizer que os dados serão
  inputados por outro/em outro componente.
  Respeitando a Hierarquia dos componentes declarada no .html

  */
  @Input()
  gameCover: string = '';//ATRIBUTO DO CARD
  @Input()
  gameLabelFilho: string = '';//ATRIBUTO DO CARD-LABEL
  @Input()
  gameTypeFilho: string = 'XPTO PS4';//ATRIBUTO DO CARD-PRICING
  @Input()
  gamePriceFilho: string = 'R$ 399,00';//ATRIBUTO DO CARD-PRICING

  constructor() {}
  ngOnInit(): void {}
}
