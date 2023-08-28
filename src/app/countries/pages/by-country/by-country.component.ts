import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  public countries: Country[] = []

  constructor( private countryService: CountryService ) { }

  public searchByCountry( busqueda : string ) {

    this.countryService.searchCountry(busqueda)
    .subscribe( term => {
      this.countries = term
    })

  }

}
