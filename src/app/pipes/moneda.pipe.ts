import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  transform(value: string): string{

    let result: string;
    result = value + '€';

    return result;
  }

}
