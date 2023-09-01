import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit , OnDestroy {

  private debouncer: Subject<String> = new Subject();

  @Output()
  public onValue = new EventEmitter();

  @Output()
  public onDebounce = new EventEmitter();

  @Input()
  public placeholder: string = 'Default';

  @Input()
  public initialValue?: string = '';

  emitValue( value:string ){
    this.onValue.emit(value)
  }

  ngOnInit(): void {

    this.debouncer
    .pipe( debounceTime(500) )
    .subscribe( value => {
      this.onDebounce.emit(value)
    })

  }

  ngOnDestroy(): void {

    this.debouncer.unsubscribe()

  }

  onKeyUpPress( term: string )
  {
    this.debouncer.next(term)
  }

}
