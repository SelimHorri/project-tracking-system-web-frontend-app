
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-index',
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.css']
})
export class EmployeeIndexComponent implements OnInit {
  
  constructor(private authenticationService: AuthenticationService,
              private employeeService: EmployeeService) {
    
  }
  
  ngOnInit(): void {
    
  }
  
  public isAuthenticated(): boolean {
    if (this.authenticationService.isLoggedIn())
      return true;
    return false;
  }
  
  
  
}






