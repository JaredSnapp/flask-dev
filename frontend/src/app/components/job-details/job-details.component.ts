import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecruiterService } from "../../services/recruiter.service"

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit { 
    @Input() job:any;
    @Output() editBtn = new EventEmitter();;
    @Output() deleteBtn = new EventEmitter();;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {

  }

  editButton(event:any) { 
    this.editBtn.emit(this.job.id);
  }

  deleteButton(event:any) {
    this.deleteBtn.emit(this.job.id);
  }

}
