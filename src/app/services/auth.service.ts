import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { environment } from '../environments/environment';
import {LoginDTO, ResponseDTO} from "../model/card";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router: Router) { }

  login(credentials: LoginDTO): Observable<ResponseDTO> {
    return this.http.post<ResponseDTO>(`${environment.apiUrl}/login`, credentials);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  saveToken(token: string | undefined) {
    if (token)
      localStorage.setItem('token', token);
    else
      localStorage.removeItem('token');
  }
}
