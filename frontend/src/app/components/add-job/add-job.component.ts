import { keyframes } from '@angular/animations';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecruiterService } from "../../services/recruiter.service";
import { Job } from 'src/app/models/models';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  @Input() recruiterIdInput: any;
  @Input() editJob: boolean = false;
  @Input() jobData!: Job;
  hideRecruiterId: boolean = false; 
  headerText: string = "Add Job";

  addJobData = {};
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private recruiterService: RecruiterService, @Inject(MAT_DIALOG_DATA) public data:any, private dialogRef: MatDialogRef <AddJobComponent>) { //, @Inject(MAT_DIALOG_DATA) public data:any) { 
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
    console.log(`add Job to recruiter: ${this.recruiterIdInput}`);
    console.log(this.recruiterIdInput);

    this.recruiterIdInput = this.data.recruiterIdInput;
    this.jobData = this.data.jobData;
    this.editJob = this.data.editJob;

    if(this.editJob) {
      this.headerText = "Edit Job";
      this.myForm.patchValue(this.jobData);
    }

    if (this.recruiterIdInput) {
      this.hideRecruiterId = true;
      let data = {
        recruiter_id: this.recruiterIdInput,
      };
      this.myForm.patchValue(data);
    }
  }

  close() {
    this.dialogRef.close();
  }
  

  onSubmit() {
    console.log("Submitting Form");
    if(this.editJob) { 
      let data = this.myForm.value;
      data.id = this.jobData.id;
      this.recruiterService.edit_job(this.myForm.value).subscribe((data:any) => {
        console.log("add job done");
        console.log(data);
        this.dialogRef.close(data);
      });
    }
    else {
      this.recruiterService.add_job(this.myForm.value).subscribe((data:any) => {
        console.log("add job done");
        console.log(data);
        this.dialogRef.close(data);
      });
    }

    let blank = {
      name: '',
      salary_low: '',
      salary_high: '',
      company: '',
      recruiter_id: null,
    };
    //this.myForm.setValue(blank);
  }

}
