
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Assignment } from '../model/dto/assignment';
import { AssignmentId } from '../model/dto/assignment-id';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  
  private apiUrl: string = environment.API_URL;
  
  constructor(private http: HttpClient) {
    this.apiUrl = this.apiUrl + "/assignments";
  }
  
  public findAll(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.apiUrl);
  }
  
  public findById(assignmentId: AssignmentId): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.apiUrl}/${assignmentId.employeeId}/${assignmentId.projectId}/${assignmentId.commitDate}`);
  }
  
  public save(assignment: Assignment): Observable<Assignment> {
    return this.http.post<Assignment>(`${this.apiUrl}`, assignment);
  }
  
  public update(assignment: Assignment): Observable<Assignment> {
    return this.http.put<Assignment>(`${this.apiUrl}`, assignment);
  }
  
  public deleteById(assignmentId: AssignmentId): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${assignmentId.employeeId}/${assignmentId.projectId}/${assignmentId.commitDate}`);
  }
  
  
  
}
