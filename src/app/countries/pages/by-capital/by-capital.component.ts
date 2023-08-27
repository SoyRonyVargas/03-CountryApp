import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceNameService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {
  
  public countries: Country[] = []

  constructor( private countryService: ServiceNameService) { }

  ngOnInit(): void {
  }

  searchByCapital( busqueda : string ){
    
    this.countryService.searchCapital(busqueda).subscribe( term => {
      this.countries = term
    })
    
  }

}
