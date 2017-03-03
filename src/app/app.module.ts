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
import {CasePipe} from "./Common/case.pipe";
import { PaymentsComponent } from './payments/payments.component';
import { AuthorizedUsersComponent } from './authorized-users/authorized-users.component';
import {CommonModule} from "@angular/common";
import { MoneyPipe } from './money.pipe';
import { RemovePipe } from './remove.pipe';

const appRoutes: Routes=[{path:'',component:MainComponent},
  {path:'comments', component:CommentsComponent},
  {path:'test', component:TestComponent},
  {path:'loaninfo', component:LoanInfoComponent},
  {path:'main', component:MainComponent}]

@NgModule({
  declarations: [

    CasePipe,
    CommentsComponent,
    TestComponent,
    NavComponent,
    LoanInfoComponent,
    ContactComponent,
    PaymentsComponent,
    MainComponent,
    AppComponent,
    AuthorizedUsersComponent,
    MoneyPipe,
    RemovePipe


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
