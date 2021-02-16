import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(list: any[], order: string): any[] {
    if (!Array.isArray(list) || !order) {
      return list;
    };

    return list.sort((a, b) => {

      if (order == 'id') {
        return a.id - b.id
      } else if (order == 'name') {
        return a.name.localeCompare(b.name)
      } else if (order == 'superPower') {
        return a.superPower.localeCompare(b.superPower)
      } else if (order == 'address') {
        return a.address.localeCompare(b.address)
      }

    });
  }
}
