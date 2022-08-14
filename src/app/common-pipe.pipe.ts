import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commonPipe'
})
export class CommonPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
