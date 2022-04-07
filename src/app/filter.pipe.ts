import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
   

  transform(value:any[],filterstring:string,propname:string): any[] {
   const res: any[] = [];
    if(!value || filterstring==="" || propname===""){
      return value
    }
    value.forEach((a:any)=>{
      if(a[propname].trim().toLowerCase().includes(filterstring.toLocaleLowerCase())){
        res.push(a)
      }
    })

    return res;
  }

}
