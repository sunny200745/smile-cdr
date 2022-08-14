import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'orderBy'
})
export class CommonPipe implements PipeTransform {

  transform(arr: any[], field: string, order?: any): any[] {
    const sortOrder = order ? order : 'asc';
    return orderBy(arr, [field => field.resource?.name?.[0]?.given, field => field.resource?.birthDate], [sortOrder]);

  }
}