import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from  'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  url = "https://repo-qrcode.herokuapp.com/qrcode/generate";

  constructor(private http: HttpClient) { }

  getqrcode(text) : Observable<any> {
    let data  = { text: text };
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
  	return this.http.post(this.url, data, { headers: header });
  }
}
