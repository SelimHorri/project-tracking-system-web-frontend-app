
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { AssignmentService } from './service/assignment.service';
import { AuthenticationService } from './service/authentication.service';
import { CredentialService } from './service/credential.service';
import { DepartmentService } from './service/department.service';
import { EmployeeService } from './service/employee.service';
import { LocationService } from './service/location.service';
import { ProjectService } from './service/project.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AssignmentService,
    AuthenticationService,
    CredentialService,
    DepartmentService,
    EmployeeService,
    LocationService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
