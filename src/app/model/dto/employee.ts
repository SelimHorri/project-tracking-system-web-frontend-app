
import { Credential } from "./credential";
import { Department } from "./department";

export class Employee {
  
  constructor(public employeeId: number,
              public firstName: string,
              public lastName: string,
              public email: string,
              public phone: string,
              public hiredate: Date,
              public job: string,
              public salary: number,
              public manager: Employee,
              public department: Department,
              public credential: Credential) {
    
  }
  
  
  
}





