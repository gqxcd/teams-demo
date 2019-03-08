import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/team';
@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {
  transform(persons: Person[]): any {
    return persons.sort((a, b) => {
      if (!a.position.localeCompare(b.position)) 
      {
        return a.depthOrder - b.depthOrder;
      }
      return a.position.localeCompare(b.position);
    });
  }
  

}
