import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remove'
})
export class RemovePipe implements PipeTransform {

  transform(value: string, args?: string): string {
    if(args != null)
      return value.replace(args,"");
  }

}
