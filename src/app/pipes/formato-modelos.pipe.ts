import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoModelos'
})
export class FormatoModelosPipe implements PipeTransform {

  transform(value: number[], ...args: any[]): any {

    let fixedValue: string;
    let cant: number = value.length;

    if(cant == 1 || cant == 2){
      return value;
    }else{
      return fixedValue = `[${value[0]}-${value[cant-1]}]`
    }
  }

}
