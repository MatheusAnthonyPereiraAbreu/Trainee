import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  
  @Output() public enviarDados = new EventEmitter();

  public list : Array<{nome:string,idade:number}>=[
    {nome : "Dener Troquatte" , idade: 29},
    {nome : "Nay" , idade: 31},
    {nome : "José" , idade: 58},

  ]

  public getDados(event:number)
  { this.enviarDados.emit(this.list[event]);
    
  }
}
