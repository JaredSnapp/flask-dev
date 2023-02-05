import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from "../models/models"

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {
  private apiUrl = 'http://127.0.0.1:5000/api/'
  private recruitersList = 'recruitersList';
  private job = 'recruiterJobs/';


  constructor(private http: HttpClient) { }

  get_recruiters(){
    let url = this.apiUrl + this.recruitersList;
    return this.http.get(url);
  } 

  get_jobs(recruiterId:number) {
    let url = this.apiUrl + this.job + recruiterId.toString();
    return this.http.get(url);
  }

  add_job(data: Job) {
    const headers = { 'content-type': 'application/json'}
    let url = this.apiUrl + this.job + '1';
    return this.http.post(url, data, {'headers':headers});
  }

  edit_job(data: Job) {
    const headers = { 'content-type': 'application/json'}
    let url = this.apiUrl + this.job + data.id.toString();
    return this.http.put(url, data, {'headers':headers});
  }

  delete_job(jobId:number){
    let url = this.apiUrl + this.job + jobId.toString();
    const headers = { 'content-type': 'application/json'};
    return this.http.delete(url, {'headers':headers});
  }
}
