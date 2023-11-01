import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent {
  public nome: string = "Usuario";
  public idade: number = 29;
  public maisum: number = 1;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://static3.tcdn.com.br/img/img_prod/460977/teste_100485_1_cbc226c7d23a19c784fb4752ffe61337.png";
  public imgTitle: string = "Property Binding";

  public position: { x: number, y: number } = { x: 0, y: 0 };

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {

    this.position.x=valor.offsetX;
    this.position.y=valor.offsetY;

  }
}
