import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService) { }
  
  public imgUser:string = " "

  ngOnInit(): void {
    
    console.log(this.authService.userData)
  }
}
