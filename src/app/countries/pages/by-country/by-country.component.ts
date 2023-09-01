import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {


  public countries: Country[] = []
  public loading:boolean = false

  constructor( private countryService: CountryService ) { }

  public initialValue?: string;

  ngOnInit(): void {
    this.countries = this.countryService.cache.byCountries.countries
    this.initialValue = this.countryService.cache.byCountries.term
  }

  public searchByCountry( busqueda : string ) {

    this.loading = true

    this.countryService.searchCountry(busqueda)
    .subscribe( term => {
      this.countries = term
      this.loading = false
    })

  }

}
