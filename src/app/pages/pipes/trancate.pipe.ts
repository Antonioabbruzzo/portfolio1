import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trancate'
})
export class TrancatePipe implements PipeTransform {

  transform(value: any, fromIndex: number, toIndex: number, elipses: boolean = false): unknown {
    //metodo alternativo per scrivere l'operatore ternario 
    // if(elipese){
    //      return '...'
    //}else{
    // return ''
    // }

    return value.toString().slice(fromIndex, toIndex) + (elipses ? '...' : ''); //operatore ternario (ovvero tutti scritto su una linea come se  stessimo facendo un if ed un else ), se è true mette i 3 puntino se false no 
  }

}
