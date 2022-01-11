import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getDatos() {
    return this.http.get<{
    id: number,
    name: string,
    firstdosedate: string,
    seconddosedate: string,
    vaccine: string }[]>(
      '/assets/datos.json'
    );
  }
}
