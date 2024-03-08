import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Answer } from '../models/answer';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private _http: HttpClient) { }

  url = "https://localhost:7288/api/company";

  getCompany(): Observable<Answer>{
    return this._http.get<Answer>(this.url, httpOption);
  }

  getCompanyNit(nit: string){
    //let x: number = parseInt(nit);
    return this._http.get<Answer>(this.url+"/?id="+nit, httpOption)
  }

}
