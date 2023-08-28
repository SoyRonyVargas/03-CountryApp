import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Output()
  public onValue = new EventEmitter();

  @Input()
  public placeholder: string = 'Default';

  emitValue( value:string ){
    this.onValue.emit(value)
  }

}
