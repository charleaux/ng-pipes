import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value === undefined) {
      return undefined;
    }

    let newString = '';
    for (let i = value.length - 1; i >= 0; i--) {
      newString = newString + value.charAt(i);
    }

    return newString;
  }
}
