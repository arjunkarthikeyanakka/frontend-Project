import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(currency:any[],searchTerm:string): any[] {
    if(!currency||!searchTerm)
       return currency;
    return currency.filter(plyr=>plyr.name.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
  }

}
