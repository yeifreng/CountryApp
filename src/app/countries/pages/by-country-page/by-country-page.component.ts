import { Component } from '@angular/core';
import { Country } from '../../interfaces/conuntry';
import { CountriesService } from '../../service/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private serviceCountries: CountriesService){}


    //Esta funcion del padre
    //ese dispara al momento de recibir lo que el hijo
    //le emite desde el input
    //por medio del parametro que esta en el html
    //llamado $event
    searchByCountry(term: string){
      this.serviceCountries.searchCountry(term).subscribe(res =>{
        this.countries = res;
      })

    }

}
