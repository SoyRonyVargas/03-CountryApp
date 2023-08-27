import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
    
    private API_URL = 'https://restcountries.com/v3.1'

    constructor(private httpClient: HttpClient) { }
    
    public searchCapital( name: string ) : Observable<Country[]> {
        return this.httpClient.get<Country[]>(`${this.API_URL}/capital/${name}`)
    }

}