import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  addJobData = {};
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { 
    this.myForm = this.fb.group({
      name: ['',[Validators.required]],
      salary_low: ['',[Validators.required,
        Validators.pattern("^[0-9]*$")]],
      salary_high: ['',[Validators.required,
        Validators.pattern("^[0-9]*$")]],
      company: ['',[Validators.required]],
      recruiter_id: [null, [
        Validators.required,
        Validators.min(0),
        Validators.max(1000000),
        Validators.pattern("^[0-9]*$")
      ]],
    })
  }

  ngOnInit(): void {
    //this.myForm.valueChanges.subscribe(console.log)
  }

  

  onSubmit() {

    console.log("Submitting Form");
    const headers = { 'content-type': 'application/json'}
    //console.log(this.myForm.value);
    let res = this.myForm.value;

    //let data = {}
    this.http.post("http://127.0.0.1:5000/api/getRecruiterJobs/1", res, {'headers':headers})
      .subscribe((data:any) => {console.log(data)})
    this.myForm.value.name = "";
    this.myForm.value.salary_low = "";
    this.myForm.value.salary_high = "";
    this.myForm.value.company = "";
    this.myForm.value.recruiter_id = null;

    

  }

}
