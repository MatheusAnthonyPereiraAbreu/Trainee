import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit{

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list : Array<{nome:string, idade:number}> = 
  
  [{nome: "Dener Troquate", idade: 18},
  {nome: "José", idade : 10},
  {nome: "Isabel", idade: 13}]

  public nome: string = 'Denner';

  ngOnInit(): void {

    setInterval(()=>{
      if(this.condition){
        this.condition = false
      }else {
        this.condition = true
      }
    },2000)
  }

  public onClick(){
    if(this.conditionClick){
      this.conditionClick = false
    }else {
      this.conditionClick = true
    }
  }
  public onClickAddList(){
    this.list.push({nome: "Nay", idade: 31})
  }
  
  public onClickEventList(event:number){
    this.list.splice(event, 1)
  }
}
