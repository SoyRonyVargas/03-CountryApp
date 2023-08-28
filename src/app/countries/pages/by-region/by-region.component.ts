import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {

  public countries: Country[] = []

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
  }

  public searchByRegion( busqueda : string ) {

    this.countryService.searchRegion(busqueda)
    .subscribe( term => {
      this.countries = term
    })

  }

}
