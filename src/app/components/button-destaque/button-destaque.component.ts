import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-destaque',
  templateUrl: './button-destaque.component.html',
  styleUrls: ['./button-destaque.component.css']
})

export class ButtonDestaqueComponent implements OnInit{

  @Input()
  nameRedeSocial:string = "";

  constructor(){}
  ngOnInit(): void {
  
  }

}
