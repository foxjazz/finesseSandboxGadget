/**
 * Created by jdickinson on 2/9/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asCase'
})
export class CasePipe implements PipeTransform {
  transform(s: string, c: string): string {
    if(s == null)
      return s;
    if(c.toLowerCase() === "lower")
    {
      return s.toLowerCase();
    }
    if(c.toLowerCase() === "upper")
    {
      return s.toUpperCase();
    }
    if(c.toLowerCase() === "name")
    {
      //caps first letter so first set lc also use the damn spacer.
      let j = s.toLowerCase().split(' ');
      let result = "";
      for(let jj of j)
      {
        if(jj.length > 0){
          result += jj[0].toUpperCase();
          result += jj.substring(1);
          result += " ";
        }
      }
      return result;

    }
    if(c.toLowerCase() === "test")
    {
      //caps first letter so first set lc also use the damn spacer.
      let j = s.toLowerCase().split(' ');
      let result = "";
      for(let jj of j)
      {
        if(jj.length > 0){
          result += jj[0].toUpperCase();
          result += jj.substring(1);
        }
      }
      return result;

    }
  }
  }
