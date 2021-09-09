
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location } from '../model/dto/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {
    this.apiUrl = this.apiUrl + "/locations";
  }

  public findAll(): Observable<Location[]> {
    return this.http.get<Location[]>(this.apiUrl);
  }

  public findById(locationId: number): Observable<Location> {
    return this.http.get<Location>(`${this.apiUrl}/${locationId}`);
  }

  public save(location: Location): Observable<Location> {
    return this.http.post<Location>(`${this.apiUrl}`, location);
  }

  public update(location: Location): Observable<Location> {
    return this.http.put<Location>(`${this.apiUrl}`, location);
  }

  public deleteById(locationId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${locationId}`);
  }



}
