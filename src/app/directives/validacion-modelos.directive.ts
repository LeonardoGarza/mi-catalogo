import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appValidacionModelos]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidacionModelosDirective, multi: true}]
})
export class ValidacionModelosDirective implements Validator{

  @Input('appValidacionModelos') validacionModelos: string;
  constructor() { }

  validate(control: AbstractControl): {[key: string]: any}{
    return this.validacionModelos? this.validacionModelosValidator(new RegExp(this.validacionModelos, "i")) (control) : null;
  }

  validacionModelosValidator(nameRe: RegExp): ValidatorFn{
    return(control: AbstractControl): {[key: string]: any} | null =>{
      let todoValido: boolean = false;
      if(control.value!=null && control.value!=""){
        let valores: string[] = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010"
        , "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
        let aux: string;
        let valor: string = control.value;
        let valido: boolean;
        let digitos: boolean = false;
        if(valor[0].length==1){
          if(valor.length!=4 && valor.length!=0){
            for(let i=2;i<21;i++){
              if(valor.length==(i*4)+(i-1)){
                digitos=true;
              }
            }
          } else {
            digitos=true;
          }
          if(digitos){
            for(let i = 0; i < valor.length-4; i=i+4){
              valido = false;
              if(valor.substring(i, i+1)==","){
                i=i+1;
              }
              aux = valor.substring(i, i+4);
              for(let j = 0; j < 21 ; j++){
                if(aux===valores[j]){
                  valido=true;
                }
              }
              if(!valido){
                todoValido=true;
              }
            }
          } else {
            todoValido=true;
          }
        }
      }
      const validacion = todoValido;
      return validacion ? {'validacionModelos' : { value: control.value } } : null;
    }
  }

}
