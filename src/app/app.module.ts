import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import {RouterModule, Routes} from "@angular/router";
import { TestComponent } from './test/test.component';

const appRoutes: Routes=[{path:'',component:TestComponent},
  {path:'comments', component:CommentsComponent}, {path:'test', component:TestComponent}]

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    TestComponent
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
