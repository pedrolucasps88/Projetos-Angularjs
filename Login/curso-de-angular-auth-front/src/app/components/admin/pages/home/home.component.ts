import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public logout() {
    this.authService.logout();
  }

}
