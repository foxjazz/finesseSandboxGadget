import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  'hammerjs';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import {RouterModule, Routes} from "@angular/router";
import { TestComponent } from './test/test.component';
import { NavComponent } from './nav/nav.component';
import { LoanInfoComponent } from './loan-info/loan-info.component';
import {MaterialModule} from "@angular/material";
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes=[{path:'',component:MainComponent},
  {path:'comments', component:CommentsComponent},
  {path:'test', component:TestComponent},
  {path:'loaninfo', component:LoanInfoComponent},
  {path:'main', component:MainComponent}]

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    TestComponent,
    NavComponent,
    LoanInfoComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
