import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recruiter-list',
  templateUrl: './recruiter-list.component.html',
  styleUrls: ['./recruiter-list.component.css']
})
export class RecruiterListComponent implements OnInit {
  @Input() recruiterList: any;
    recruiters = ['test', 'hello'];
  constructor() { }

  ngOnInit(): void {
    console.log(this.recruiterList[0].firstName);
  }

}
