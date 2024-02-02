import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  //Necesitamos poder agregar un valor desde el padre al hijo
  //Creamos una variable en este componente hijo
  //Luego colocamos el componente hijo dentro del componente padre
  //Y ya podemos llamar a la variable como un atributo del componente hijo
  //Alla en el componente padre
  @Input()
  public placeholder: string = '';

//Necesitamos emitir un resultado desde el hijo hacia el padre
//Creamos una variable que va ser instancia del objeto EventEmitter
//Luego creamos un evento de teclado en el html donde llamamos una funcion
//La funcion va a reibir un parametro desde el html que sera
//el value del input y lo va a emitir
//Para que el padre lo reciba

  @Output()
  public onValue = new EventEmitter<string>();


  emitValue(value:string){
    this.onValue.emit(value);
  }

}
