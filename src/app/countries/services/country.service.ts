import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs'
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountryService {

    private API_URL = 'https://restcountries.com/v3.1'

    constructor(private httpClient: HttpClient) { }

    public searchCapital( name: string ) : Observable<Country[]> {
        return this.httpClient
          .get<Country[]>(`${this.API_URL}/capital/${name}`)
          .pipe( catchError( () => of([]) ) )
    }

    public searchCountry( name: string ) : Observable<Country[]> {
      return this.httpClient
        .get<Country[]>(`${this.API_URL}/name/${name}`)
        .pipe( catchError( () => of([]) ) )
    }

    public searchRegion( name: string ) : Observable<Country[]> {
      return this.httpClient
        .get<Country[]>(`${this.API_URL}/region/${name}`)
        .pipe( catchError( () => of([]) ) )
    }

    public searchById( id: string ) : Observable<Country[] | null> {
      return this.httpClient
        .get<Country[]>(`${this.API_URL}/alpha/${id}`)
        .pipe( catchError( () => of(null) ) )
    }

}
