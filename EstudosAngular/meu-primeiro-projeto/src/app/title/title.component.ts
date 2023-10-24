import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})

export class TitleComponent implements OnInit, OnChanges{
  @Input() public title:string = "Bem Vindo!";

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOninit(): void{ }

  ngOnChanges(): void { 
    alert("Foi alterado com sucesso !")
  }


}
