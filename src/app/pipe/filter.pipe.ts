import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(value: any[], key: string, phrase:any): any[] {
        if (!Array.isArray(value) ||!key || !phrase)
        {return value}
        return value.filter( e=> {
          if (typeof e[key] == "number" && typeof phrase == "number"){
            return e[key] == phrase}
          else return e[key].toLowerCase().includes(phrase.toLowerCase())
        })}}
    
