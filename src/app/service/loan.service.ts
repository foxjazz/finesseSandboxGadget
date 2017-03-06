

import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Comment, ICommentList} from "../comments/Comments";
import {ILoan} from "./Loan";
import {IContact, Contact} from "../contact/contact";
import {IMailingAddress} from "../main/MailingAddress";
import {payment} from "../payments/payment";
import {IAuthorizedUser} from "./AuthorizedUser";
import {IOtherLoan} from "../loan-info/IOtherLoan";
import {baseuri} from "./config";
import {Outcome} from "../contact/outcome";
import {Reason} from "../contact/reason";
import {IUser} from "../main/user";

// This is the http calls to crud the comments in the database of Service.Comments

@Injectable()
export class LoanService {


  constructor(public http: Http){ this.result = "";
    //this.baseURI = 'https://localhost/fiwebapi';
    this.baseURI = baseuri.base;

  }
  result: string;
  baseURI: string;
  ccomments: Array<Comment>;

  public getOutcomes():Observable<Array<Outcome>>
  {
    let uri = this.baseURI + '/api/outcomes'
    return this.http.get(uri)
      .map((res: Response) => res.json());
  }

  public getUser(user: string):Observable<Array<IUser>>{
    let uri = this.baseURI + '/api/users/' + user;
    return this.http.get(uri)
      .map((res: Response) => res.json());
  }
  public getReasons():Observable<Array<Reason>>
  {
    let uri = this.baseURI + '/api/reasons'
    return this.http.get(uri)
      .map((res: Response) => res.json());
  }

  public getAllComments(id: string): Observable<Array<Comment>>
  {
    let uri = this.baseURI + '/api/Comments/All/' + id;
    return this.http.get(uri)
      .map((res: Response) => res.json());
  }

  public getComments(id: string): Observable<Array<Comment>>
  {
    let uri = this.baseURI + '/api/Comments/' + id;
    return this.http.get(uri)
      .map((res: Response) => res.json());
  }

  public getCommentList(): Observable<Array<ICommentList>>{
    let uri = this.baseURI + '/api/CommentOptions';
    return this.http.get(uri)
      .map((res: Response) => res.json());
  }
  public getPayments(id: string): Observable<Array<payment>>
  {
    let uri = this.baseURI + '/api/Payments/' + id;

    return this.http.get(uri)
      .map((res: Response) => res.json());
  }
  public getOtherLoans(id: string): Observable<Array<IOtherLoan>>{
    let uri = this.baseURI + '/api/OtherLoans/' + id
    return this.http.get(uri)
      .map((res: Response) => res.json());
  }
  public getAuthorizedUsers(id: string): Observable<Array<IAuthorizedUser>>{
    let uri = this.baseURI + '/api/AuthorizedUsers/' + id;
    return this.http.get(uri)
      .map((res: Response) => res.json());
  }
  public getContacts(id: string): Observable<Array<IContact>>{

    let uri = this.baseURI + '/api/Contacts/' + id;
    return this.http.get(uri)
      .map((res: Response) => res.json());
  }
  public getLoan(id: string): Observable<Array<ILoan>>
  {

    let uri = this.baseURI + '/api/Loans/' + id;
    return this.http.get(uri)
      .map((res: Response) => res.json());
  }
  public getMailingAddress(id: string) : Observable<Array<IMailingAddress>>
  {

    let uri = this.baseURI + '/api/MailingAddress/' + id;
    return this.http.get(uri)
      .map((res: Response) => res.json());
  }

  /*public savePromised(c: Contact){
    let uri = this.baseURI + '/api/Contacts/';
    this.put(uri,JSON.stringify(c)).subscribe(r => {
      this.result = r;
      console.log(this.result);
    });
  }*/


  /*public AddCommentsGetComments(c: Comments): Observable<Array<Comments>>{
    let uri = this.baseURI + '/api/Comments/';
    this.save(uri,JSON.stringify(c)).subscribe(r => {
      this.result = r;
      console.log(this.result);
      this.getComments(c.loanID).subscribe(x => {
        return this.getComments(c.loanID);
      })
    });
  }*/

  private save(uri: string,data: string) : Observable<any>{
    // this won't actually work because the StarWars API doesn't
    // is read-only. But it would look like this:

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions( { headers: headers } );
    return this.http.post(uri, data, options).map(x => x.json());

  }

  public put(put: string,data: string, get: string) : Observable<any>{
    // this won't actually work because the StarWars API doesn't
    // is read-only. But it would look like this:
    let p = this.baseURI + '/api/' + put;
    let guri = this.baseURI + '/api/' + get;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions( { headers: headers } );
    return this.http.put(p, data, options)
      .map(x => x.json())
      .catch(this.handleError);
  }
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
 /* public putget(put: string,data: string, get: string) : Observable<any>{
    // this won't actually work because the StarWars API doesn't
    // is read-only. But it would look like this:
    let p = this.baseURI + '/api/' + put;
    let guri = this.baseURI + '/api/' + get;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions( { headers: headers } );
    return this.http.put(p, data, options)
      .map(x => x.json())
      .mergeMap(g => this.http.get(guri));

  }*/
  public saveget(u: string,data: string, id: string) : Observable<any>{
    // this won't actually work because the StarWars API doesn't
    // is read-only. But it would look like this:
    let uri = this.baseURI + '/api/' + u;
    let guri = this.baseURI + '/api/' + u + '/' + id
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions( { headers: headers } );
    return this.http.post(uri, data, options)
      .map(x => {let reponse = x.json();})
      .mergeMap(g => this.http.get(guri).map((res: Response) => res.json()));

  }

}


/**
 * Created by jdickinson on 2/6/2017.
 */
