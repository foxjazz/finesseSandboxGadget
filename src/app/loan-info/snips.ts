/**
 * Created by jdickinson on 2/17/2017.
 */
import {isDate} from "rxjs/util/isDate";
import {Contact} from "../contact/contact";


export class Snips {

  pbd: string;
  pbd2: string;
  pbd3: string;

  d1: string;
  d2: string;
  d3:  string;
c: Contact;
test: string;

  mdy(s: string): Date{
    let ee = this.pbd.split('/');
    return new Date(Date.UTC(Number(ee[2]), Number(ee[0])-1, Number(ee[1]))) ;
  }
  savePromises() {
    //first checkvalidations
    let invalid = false;
    this.d1 = "";
    this.d2 = "";
    this.d3 = "";

    let d = this.mdy(this.pbd);
    this.test = d.toISOString();
    if (this.pbd != null) {
      let ee = this.pbd.split('/');
      let d = new Date(Date.UTC(Number(ee[0]), Number(ee[1]) - 1, Number(ee[2]) + 1));

      if (isDate(d)) {
        this.d1 = "";
        this.c.promisedByDate = d;
      }
      else {
        this.d1 = "pde";
        invalid = true;
      }
    }
    if (this.pbd2 != null) {
      let d = this.mdy(this.pbd2);

      if (isDate(d)) {
        this.d2 = "";
        this.c.promisedByDate = d;
      }
      else {
        this.d2 = "pde";
        invalid = true;
      }
    }

    if (this.pbd3 != null) {
      let d = this.mdy(this.pbd3);

      if (isDate(d)) {
        this.d3 = "";
        this.c.promisedByDate = d;
      }
      else {
        this.d3 = "pde";
        invalid = true;
      }
    }

  }
}
