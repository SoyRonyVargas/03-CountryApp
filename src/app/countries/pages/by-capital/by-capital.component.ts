import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {

  public countries: Country[] = [];
  public initialValue?: string;
  public loading:boolean = false

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
    this.countries = this.countryService.cache.byCapital.countries
    this.initialValue = this.countryService.cache.byCapital.term
  }

  searchByCapital( busqueda : string ){

    this.loading = true
    this.countryService.searchCapital(busqueda)
      .subscribe( term => {
        this.loading = false
        this.countries = term
      })

  }

}
