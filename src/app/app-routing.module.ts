
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeIndexComponent } from './component/employee/employee-index/employee-index.component';
import { ErrorComponent } from './component/error/error.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';

const routes: Routes = [
  
  { path: "", component: HomeComponent },
  { path: "ng-app", component: HomeComponent },
  { path: "ng-app/login", component: LoginComponent },
  { path: "ng-app/logout", component: LogoutComponent },
  { path: "ng-app/employees/employee-index", component: EmployeeIndexComponent },
  
  { path: "**", component: ErrorComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
