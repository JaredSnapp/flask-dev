import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-recruiter';
  recruiterList = [
    {
    id: 1,
    firstName: "john", 
    lastName: "doe", 
    phoneNumber: 1111111111,
    company: "dull inc.",
    active: true,
    companylist: [
        {
            name: "company1",
            position: "front end dev",
            salaryRange: "86k - 111k",
            companyDescription: "they do things",
            jobDescription: "you'll do things",
        },
        {
            name: "company2",
            position: "back end dev",
            salaryRange: "186k - 1,110k",
            companyDescription: "they do better things",
            jobDescription: "you'll do better things",
        }
    ]
    },
    {
    id: 2,
    firstName: "jimmothy", 
    lastName: "jimmels", 
    phoneNumber: 1111111111,
    company: "boring you daily LLC",
    active: true,
    companylist: [
        {
            name: "company1",
            position: "front end dev",
            salaryRange: "86k - 111k",
            companyDescription: "they do things",
            jobDescription: "you'll do things",
        },
        {
            name: "company2",
            position: "back end dev",
            salaryRange: "186k - 1,110k",
            companyDescription: "they do better things",
            jobDescription: "you'll do better things",
        }
    ]
    }
  ]

}
