import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Output() 
  public onValue = new EventEmitter();

  emitValue( value:string ){
    this.onValue.emit(value)
  }

}
