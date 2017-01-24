import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private http: Http) { this.command = "User/Agent002";
    this.body = '<User> <state>READY</state></User>';
  }
  uri: string;
  command: string;
  response: any;
  body: string;
  testGet(){
    this.get().subscribe( r => {
      this.response = r;
    })
  }
  public get(): Observable<Array<any>>
  {

    return this.http.get(this.uri + this.command)
      .map((res: Response) => res.json());
  }
  public post(): Observable<Array<any>>
  {
    let headers = new Headers([{ 'Content-Type': 'application/xml' },{ 'Authorization': 'Basic QWdlbnQwMDI6Y2lzY29wc2R0' }]);

    let options = new RequestOptions( { headers: headers } );
    return this.http.put(this.uri + this.command, this.body, options)
      .map((res: Response) => res.json());
  }
  testPost(){
     this.post().subscribe(r => {
       this.response = r;
     })
  }
  ngOnInit() {
    this.uri = "http://hq-uccx.abc.inc:8082/finesse/api/"

  }

}
