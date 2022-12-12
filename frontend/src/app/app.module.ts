import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecruiterListComponent } from './components/recruiter-list/recruiter-list.component';
import { RecruiterComponent } from './components/recruiter/recruiter.component';
import { AddRecruiterComponent } from './components/add-recruiter/add-recruiter.component';
import { RecruiterDetailsComponent } from './components/recruiter-details/recruiter-details.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecruiterListComponent,
    RecruiterComponent,
    AddRecruiterComponent,
    RecruiterDetailsComponent,
    AddJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
