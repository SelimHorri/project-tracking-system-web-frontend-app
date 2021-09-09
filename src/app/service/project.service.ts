
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../model/dto/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {
    this.apiUrl = this.apiUrl + "/projects";
  }

  public findAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  public findById(projectId: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${projectId}`);
  }

  public save(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiUrl}`, project);
  }

  public update(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}`, project);
  }

  public deleteById(projectId: number): Observable<any> {
    return this.http.delete<boolean>(`${this.apiUrl}/${projectId}`);
  }



}
