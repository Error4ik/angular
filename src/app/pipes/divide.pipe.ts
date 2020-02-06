import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divide'
})
export class DividePipe implements PipeTransform {

  transform(num: number, devider: number = 2): number {
    return num / devider;
  }
}
