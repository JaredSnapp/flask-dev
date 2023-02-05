import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Job } from 'src/app/models/models';


@Component({
  selector: 'app-add-job-popup',
  templateUrl: './add-job-popup.component.html',
  styleUrls: ['./add-job-popup.component.css']
})
export class AddJobPopupComponent implements OnInit {
  recruiterId!: number;
  jobData!: Job;
  editJob: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.recruiterId = this.data.recruiterIdInput;
    this.jobData = this.data.jobData;
    this.editJob = this.data.editJob;

    console.log(this.data);
  }

}
