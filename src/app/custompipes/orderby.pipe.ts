import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby' // we can change this name
})
export class OrderbyPipe implements PipeTransform {

  transform(array: any[], ...args: any[]): any[] {
    console.log(array);
    console.log(args);
    // string, number, object
    if(typeof array[0]=='number' || array[0]=='Number')
      return this.numberSort(array);
    else if(typeof array[0]=="string" || array[0]=='String')
      return this.stringSort(array);
    else if( array[0] instanceof Date )
      return this.dateSort(array);
    else if(typeof array[0]=="object")
      return this.objectSort(array)
    else
      return array.sort();
  }

  numberSort(array:any[]){
    return array.sort((n1,n2)=>n1-n2)
  }
  stringSort(array:any[]){
    return array.sort()
  }
  objectSort(array:any[]){
    return array.sort(/** do the logic of sorting object array on the basis of property */) // assignment
  }
  dateSort(array:Date[]){
    return array.sort((d1,d2)=>{
      if (d1>d2)  return 1
      else if (d1<d2) return -1
      else return 0;
    })
  }
}
