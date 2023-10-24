import { Component, OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{valor}}
  <button (click) = "adicionar()">Adicionar</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {

  public valor: number = 1

  constructor() {
  }
  ngOnInit(): void {
  }
  public adicionar(): number{
    return this.valor+= 1 ;

  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewIni")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
}
