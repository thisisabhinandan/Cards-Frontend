import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { CardDTO, CreateCardDTO, FetchCardDTO, ResponseDTO} from "../model/card";
import { environment } from '../environments/environment';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient,private auth:AuthService) { }

  private getHeaders() {
    const token=this.auth.getToken();
    return{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
  }

  createCard(createCardDTO:CreateCardDTO):Observable<ResponseDTO>{
    const params = new HttpParams().set('mobileNumber', createCardDTO.mobileNumber);
    return this.http.post<ResponseDTO>(`${environment.apiUrl}/create`,params);
  }

  fetchCardDetails(cardDetails:CardDTO):Observable<FetchCardDTO> {
    return this.http.get<FetchCardDTO>(`${environment.apiUrl}/fetch/${cardDetails.cardNumber}`,this.getHeaders());
  }

  deleteCard(createCardDTO:CreateCardDTO) : Observable<ResponseDTO>{
    const params = new HttpParams().set('mobileNumber', createCardDTO.mobileNumber);
    return this.http.delete<ResponseDTO>(`${environment.apiUrl}/delete`,{params,...this.getHeaders()});
  }
}
