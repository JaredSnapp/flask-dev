import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  constructor(private http: HttpClient) { }

  get_recruiters(){
    return this.http.get("http://localhost:5000/api/recruitersList");
  }
}
