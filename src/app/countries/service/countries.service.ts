import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/conuntry';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private httpClient: HttpClient) {}

  searchCountryById(id: string): Observable<Country | null>{

    const url = `${this.apiUrl}/alpha/${id}`;

    return this.httpClient.get<Country[]>(url)
    //Si sucede un error, regresa un nuevo observable que va ser un arreglo vacio
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null) )
      );

  }

  searchCapital(term: string): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${term}`;

    return this.httpClient.get<Country[]>(url)
    //Si sucede un error, regresa un nuevo observable que va ser un arreglo vacio
      .pipe(
        catchError(() => of([]) )
      );
  }

  searchCountry(term: string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${term}`;

    return this.httpClient.get<Country[]>(url)
    //Si sucede un error, regresa un nuevo observable que va ser un arreglo vacio
      .pipe(
        catchError(() => of([]) )
      );
  }

  searchRegion(term: string): Observable<Country[]>{

    const url = `${this.apiUrl}/region/${term}`;

    return this.httpClient.get<Country[]>(url)
    //Si sucede un error, regresa un nuevo observable que va ser un arreglo vacio
      .pipe(
        catchError(() => of([]) )
      );
  }

}
