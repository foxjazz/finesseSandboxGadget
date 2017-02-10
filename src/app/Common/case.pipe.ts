/**
 * Created by jdickinson on 2/9/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asCase'
})
export class CasePipe implements PipeTransform {
  transform(s: string, c: string): string {
    if(c.toLowerCase() === "lower")
    {
      return s.toLowerCase();
    }
    if(c.toLowerCase() === "upper")
    {
      return s.toUpperCase();
    }
  }
  }
