import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipes implements PipeTransform {
  transform(num: number, pow: number = 2): number {
    return num * pow;
  }

}
