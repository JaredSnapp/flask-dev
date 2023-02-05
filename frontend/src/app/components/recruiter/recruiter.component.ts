import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecruiterService } from "../../services/recruiter.service";
import { MatDialog} from "@angular/material/dialog";
import { AddJobComponent } from "../add-job/add-job.component";
import { AddJobPopupComponent } from "../add-job-popup/add-job-popup.component";
import { Recruiter, Job } from "../../models/models";



@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
    @Input() recruiter!:Recruiter;
    @Input() expand:any;
    @Output() btnClick = new EventEmitter();
    jobList:Job[] = [];

  constructor(private recruiterService: RecruiterService, private dialog:MatDialog) {
    this.expand = false;
   }

  ngOnInit(): void {
  }

  expandClick() {
    this.expand = !this.expand;
    if (this.expand) {
      this.recruiterService.get_jobs(this.recruiter.id).subscribe((jobs) => {
        this.jobList = <Job[]> jobs;
        console.log(this.jobList);
      });
    } 
  }

  addJob() {
    console.log(`this.recruiter.id: ${this.recruiter.id}`);
    
    let dialogRef = this.dialog.open(AddJobComponent, {
      data: {
        recruiterIdInput: this.recruiter.id,
        editJob: false,
      }
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if (result) {
        this.jobList.push(result);
      }
    }) 
  }

  editJob(id:number) {
    console.log(`edit button job id: ${id}`);
    console.log(`this.recruiter.id: ${this.recruiter.id}`);
    let job:Job = this.jobList.filter((ele:any) => ele.id == id)[0];
    
    let dialogRef = this.dialog.open(AddJobComponent, {
      data: {
        recruiterIdInput: this.recruiter.id,
        jobData: job,
        editJob: true,
      }
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result) {
        let index = this.jobList.findIndex((ele) => ele.id == result.id) 
        this.jobList[index] = result;
      }
    }) 
  }

  deleteJob(id:number) {
    console.log(`delete job id: ${id}`);
    this.recruiterService.delete_job(id).subscribe((job) => {
      console.log(`job ${job} deleted`);
    });
    this.jobList = this.jobList.filter((ele:any) => ele.id != id);
  }

}
