import { Observable, catchError, delay, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Injectable } from '@angular/core';
import { Region } from '../interfaces/region';

@Injectable({providedIn: 'root'})
export class CountryService {

    public cache: CacheStore = {
      byRegion: { countries: [] },
      byCountries: { term: "", countries: [] },
      byCapital: { term: "", countries: [] }
    }

    private API_URL = 'https://restcountries.com/v3.1'

    constructor(private httpClient: HttpClient) {

      this.getStorage()

    }

    private saveToStorage() : void {

      try
      {
        window.localStorage.setItem('store', JSON.stringify(this.cache))
      }
      catch
      {
        throw new Error("Error al grabar en localstorage")
      }

    }

    private getStorage() : void {

      try
      {

        if( !window.localStorage.getItem('store') ) return

        this.cache = JSON.parse(window.localStorage.getItem('store')!)

      }
      catch
      {
        throw new Error("Error al grabar en localstorage")
      }

    }

    private getHttpRequest( url: string ) : Observable<Country[]>{
      return this.httpClient.get<Country[]>(url)
        .pipe(
          catchError( () => of([]) ),
          delay(2000)
        )
    }

    public searchCapital( name: string ) : Observable<Country[]> {
        return this.getHttpRequest(`${this.API_URL}/capital/${name}`)
          .pipe(
            tap( countries => {
              this.cache.byCapital = {
                term: name,
                countries
              }
            }),
            tap( () => this.saveToStorage() )
          )
    }

    public searchCountry( name: string ) : Observable<Country[]> {
      return this.getHttpRequest(`${this.API_URL}/name/${name}`)
          .pipe( tap( countries => {
            this.cache.byCountries = {
              term: name,
              countries
            }
          }),
          tap( () => this.saveToStorage() )
        )
    }

    public searchRegion( name: Region ) : Observable<Country[]> {
      return this.getHttpRequest(`${this.API_URL}/region/${name}`)
        .pipe( tap( countries => {
          this.cache.byRegion = {
            region: name,
            countries
          }
        }),
        tap( () => this.saveToStorage() )
      )
    }

    public searchById( id: string ) : Observable<Country[] | null> {
      return this.httpClient
        .get<Country[]>(`${this.API_URL}/alpha/${id}`)
        .pipe( catchError( () => of(null) ) )
    }

}
