
import { Employee } from "./employee";
import { Project } from "./project";

export class Assignment {
  
  constructor(public employeeId: number,
              public projectId: number,
              public commitDate: Date,
              public commitEmpDesc: string,
              public commitMgrDesc: string,
              public employee: Employee,
              public project: Project) {
    
  }
  
  
  
}



