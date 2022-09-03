import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
    @Input() recruiter:any;

  constructor() { }

  ngOnInit(): void {
  }

}
