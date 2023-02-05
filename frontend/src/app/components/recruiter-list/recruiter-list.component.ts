import { Component, OnInit, Input } from '@angular/core';
import { RecruiterService } from "../../services/recruiter.service"
import { Job, Recruiter, Company } from "../../models/models"



@Component({
  selector: 'app-recruiter-list',
  templateUrl: './recruiter-list.component.html',
  styleUrls: ['./recruiter-list.component.css']
})
export class RecruiterListComponent implements OnInit {
  recruiterList: Recruiter[];
  jobList: Job[];
  constructor(private recruiterService: RecruiterService) {
    this.recruiterList = [];
    this.jobList = [];
  }

  ngOnInit(): void {
    this.recruiterService.get_recruiters().subscribe((recruiters) => {
      this.recruiterList = <Recruiter[]>recruiters;
      console.log(this.recruiterList);
    });
  }

  expandClick(recruiter:any) {
    /*const index = this.recruiterList.filter((ele:any) => {return ele.recruiter.id === recruiter.id});
    if (index) {
        index[0].expand = index[0].expand ? false : true;
        this.recruiterService.get_jobs(recruiter.id).subscribe((jobs) => {
          this.jobList = jobs;
          index[0].jobs = jobs;
        });
    } */
    
  }

}
