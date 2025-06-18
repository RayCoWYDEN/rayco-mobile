import { Sort } from "../models/sort.model";

export const toStringSorts = (sorts: Sort[]): string => {
    let sortsString = '?sort='
    sorts.forEach((sort, i) => {
        if(i == sorts.length - 1){
            sortsString += `${sort.field},${sort.direction}`
        }else {
            sortsString += `${sort.field},${sort.direction}&`
        }
    })
    return sortsString
}