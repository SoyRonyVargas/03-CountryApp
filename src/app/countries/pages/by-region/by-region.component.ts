import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {

  public countries: Country[] = []

  public regions: Region[] = ['Africa' , 'America', 'Asia' ,'Europe', 'Oceania']

  public loading:boolean = false

  public selectedRegion?: Region

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
    this.selectedRegion = this.countryService.cache.byRegion.region
    this.countries = this.countryService.cache.byRegion.countries
  }

  public searchByRegion( busqueda : Region ) {

    this.selectedRegion = busqueda

    this.loading = true

    this.countryService.searchRegion(busqueda)
    .subscribe( term => {
      this.countries = term
      this.loading = false
    })

  }

}
