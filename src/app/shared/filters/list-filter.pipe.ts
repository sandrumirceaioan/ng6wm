import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'listFilter',
    pure: false
})
export class ListsFilterPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        if (!items || !filter) {
            return items;
        }

        filter = filter.toLowerCase();
        return items.filter((item) => {
            let check = this.objectContains(item, filter);
            if (check) return item;
        });
    }

    objectContains(obj, term: string) {
        for (let key in obj) {
            let value: string = obj[key].toString();
            if (value.toLowerCase().indexOf(term) > -1) {
                return true;
            }
        }
        return false;
    }

}