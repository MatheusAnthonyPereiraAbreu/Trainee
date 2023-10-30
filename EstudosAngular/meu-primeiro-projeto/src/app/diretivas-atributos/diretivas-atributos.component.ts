import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit {
  
  public valor: boolean = false;
  public heightPx: string = "20px";
  public backgroundColor:string = "purple";

  public nome : string = " "
  public list: Array<{nome:string}> = [{nome:"Dener Troquate"}];

  public date:Date = new Date();

  ngOnInit(): void {
    setInterval(() => {
      if (this.valor) {
        this.valor = false;
      } else { this.valor = true; }
      
        if (this.heightPx == "20px"){
          this.heightPx = "50px"
        }else{
          this.heightPx = "20px"
        }
        
        if (this.backgroundColor == "purple"){
          this.backgroundColor = "green"
        }
        else {
          this.backgroundColor = "purple"
        }
    }, 2000)
  }
  public salvar(){
    this.list.push({ nome : this.nome});
    this.nome=""
  }
}
