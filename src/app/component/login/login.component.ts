import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from 'src/app/model/dto/authentication-request';
import { AuthenticationResponse } from 'src/app/model/dto/authentication-response';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public username!: string;
  public password!: string;
  
  constructor(private authenticationService: AuthenticationService) {
    
  }
  
  ngOnInit(): void {
    
  }
  
  public onLogin(authenticationRequest: AuthenticationRequest): void {
    this.authenticationService.authenticate(authenticationRequest)
        .subscribe(
          (authenticationResponse: AuthenticationResponse) => {
            
            if (!authenticationResponse.isEligible) {
              alert('Problem user not eligible: ' + authenticationResponse.isEligible);
            }
            else {
              alert(`hello friend ${authenticationResponse.username.toUpperCase()}`);
              // sessionStorage.setItem("username", authenticationResponse.username);
            }
            
          },
          (error: HttpErrorResponse) => {
            console.log(error.message);
          }
        );
  }
  
  
  
}




