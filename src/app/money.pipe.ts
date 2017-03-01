import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remusd'
})
export class MoneyPipe implements PipeTransform {

  transform(value: any): string {
    if(value != null) {
      //console.log("here is " + JSON.stringify(value));
      return value.replace("USD", "");
    }else{
      //console.log(value);
      return "";
    }
  }

}
