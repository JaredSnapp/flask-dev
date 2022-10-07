import { Component, OnInit, Input } from '@angular/core';
import { Recruiter, Company } from "../../Recruiter"

@Component({
  selector: 'app-recruiter-list',
  templateUrl: './recruiter-list.component.html',
  styleUrls: ['./recruiter-list.component.css']
})
export class RecruiterListComponent implements OnInit {
  @Input() recruiters: any;
  recruiterList: any;
  constructor() { }

  ngOnInit(): void {
    this.recruiterList = this.recruiters.map((ele:any) => {
        return { recruiter: ele,
        expand: false};
    })
    console.log(this.recruiterList[0].recruiter.firstName);
    console.log(this.recruiterList[0].expand);
  }

  expandClick(recruiter:any) {
    const index = this.recruiterList.filter((ele:any) => {return ele.recruiter.id === recruiter.id});
    if (index) {
        index[0].expand = index[0].expand ? false : true;
    }
  }

}
