import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-id',
  templateUrl: './by-id.component.html',
  styleUrls: ['./by-id.component.css']
})
export class ByIdComponent implements OnInit {

  private id:string = '';

  country?:Country;

  translations: string[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private router: Router
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( ({ id }) => {

      this.id = id

      this.countryService.searchById(this.id).subscribe( country => {

        if( country == null ) return this.router.navigateByUrl("");

        this.country = country[0]

        this.translations = Object.keys(this.country.translations).map( trans => {
          return this.country!.translations[trans].common
        })

        return;

      })

    })

  }

}
