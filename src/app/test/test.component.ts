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

  constructor(private http: Http) {
    this.command = "User/Agent002";
    this.body = '<User> <state>READY</state></User>';
  }
  uri: string;
  command: string;
  response: any;
  body: string;
  setReadyState(){
    this.command = "User/Agent002";
    this.body = '<User> <state>READY</state></User>';
    this.put();
  }
  setNotReadyState(){
    this.command = "User/Agent002";
    this.body = '<User> <state>NOT_READY</state></User>';
    this.put();
  }
  wrapUpTest(){
    this.command = "Dialog/54321";
    this.body = `<Dialog>
      <requestedAction>UPDATE_CALL_DATA</requestedAction>
      <mediaProperties>
        <wrapUpReason>Happy customer!</wrapUpReason>
      </mediaProperties>
      </Dialog>;`

    this.testPut();
  }
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
  public put(): Observable<Array<any>>
  {
    //let headers = new Headers([{ 'Content-Type': 'application/xml' },{ 'Authorization': 'Basic QWdlbnQwMDI6Y2lzY29wc2R0' }]);
    let headers = new Headers({'Content-Type': 'application/xml'});
    headers.append('Accept', 'application/xml');
    let options = new RequestOptions( { headers: headers } );
    return this.http.put(this.uri + this.command, this.body, options)
      .map((res: Response) => res.json());
  }
  testPut(){
     this.put().subscribe(r => {
       this.response = r;
     })
  }
  ngOnInit() {
    this.uri = "http://hq-uccx.abc.inc:8082/finesse/api/"

  }

}
