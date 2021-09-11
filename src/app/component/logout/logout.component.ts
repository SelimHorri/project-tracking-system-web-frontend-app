
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  
  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    
  }
  
  ngOnInit(): void {
    this.onLogout();
  }
  
  public onLogout(): void {
    if (this.authenticationService.isLoggedIn()) {
      sessionStorage.clear();
      console.log("logged outtttt");
      this.router.navigate(["/ng-app/login"]);
    }
  }
  
  
  
}





