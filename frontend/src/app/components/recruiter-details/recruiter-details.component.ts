import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recruiter-details',
  templateUrl: './recruiter-details.component.html',
  styleUrls: ['./recruiter-details.component.css']
})
export class RecruiterDetailsComponent implements OnInit { 
    @Input() recruiter:any;

  constructor() { }

  ngOnInit(): void {
  }

}
