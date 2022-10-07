import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
    @Input() recruiter:any;
    @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  expandClick() {
    this.btnClick.emit(this.recruiter);
    return this.recruiter;
  }

}
