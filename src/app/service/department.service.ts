
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../model/dto/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {
    this.apiUrl = this.apiUrl + "/departments";
  }

  public findAll(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  public findById(departmentId: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/${departmentId}`);
  }

  public save(department: Department): Observable<Department> {
    return this.http.post<Department>(`${this.apiUrl}`, department);
  }

  public update(department: Department): Observable<Department> {
    return this.http.put<Department>(`${this.apiUrl}`, department);
  }

  public deleteById(departmentId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${departmentId}`);
  }



}
