

import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Comments} from "../comments/Comments";
import {ILoan} from "./Loan";

// This is the http calls to crud the comments in the database of Service.Comments

@Injectable()
export class LoanService {
  constructor(public http: Http){}
  public getComments(id: string): Observable<Array<Comments>>
  {
    let uri = 'https://localhost/fiwebapi/api/Comments/' + id;
    return this.http.get(uri)
      .map((res: Response) => res.json());
  }
  public getLoan(id: string): Observable<Array<ILoan>>
  {
    let uri = 'https://localhost/fiwebapi/api/Loans/' + id;
    return this.http.get(uri)
      .map((res: Response) => res.json());
  }
  result;
  public Add(c: Comments){
    let uri = 'http://localhost:5055/api/Comments/';
    this.save(uri,JSON.stringify(c)).subscribe(r => {this.result = r;});
    console.log(this.result);
  }

  private save(uri: string,data: string) : Observable<any>{
    // this won't actually work because the StarWars API doesn't
    // is read-only. But it would look like this:

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions( { headers: headers } );
    return this.http.post(uri, data, options).map(x => x.json());

  }
}


/**
 * Created by jdickinson on 2/6/2017.
 */
