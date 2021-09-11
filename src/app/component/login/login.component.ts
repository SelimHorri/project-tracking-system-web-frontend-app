
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/model/dto/authentication-request';
import { AuthenticationResponse } from 'src/app/model/dto/authentication-response';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    
  }
  
  ngOnInit(): void {
    
  }
  
  public onLogin(authenticationRequest: AuthenticationRequest): void {
    authenticationRequest.username = authenticationRequest.username.toLowerCase().trim();
    this.authenticationService.authenticate(authenticationRequest)
      .subscribe(
        (authenticationResponse: AuthenticationResponse) => {
          
          if (!authenticationResponse.isEligible)
            alert('Problem user not eligible: ' + authenticationResponse.isEligible);
          else {
            if (this.authenticationService.isLoggedIn()) {
              console.log("Already signed in!");
              alert("Already signed in!");
            }
            else {
              sessionStorage.setItem("username", authenticationResponse.username);
              this.router.navigate(["/ng-app/employees/employee-index"]);
            }
          }
          
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
          alert(error.message);
        }
    );
  }
  
  
  
}




