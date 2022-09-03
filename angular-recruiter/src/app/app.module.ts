import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecruiterListComponent } from './components/recruiter-list/recruiter-list.component';
import { RecruiterComponent } from './components/recruiter/recruiter.component';
import { AddRecruiterComponent } from './components/add-recruiter/add-recruiter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecruiterListComponent,
    RecruiterComponent,
    AddRecruiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
