import { Component } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../interfaces/conuntry';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

constructor(private serviceCountries: CountriesService){}


  //Esta funcion del padre
  //ese dispara al momento de recibir lo que el hijo
  //le emite desde el input
  //por medio del parametro que esta en el html
  //llamado $event
  searchByCapital(term: string){
    this.serviceCountries.searchCapital(term).subscribe(res =>{
      this.countries = res;
    })

  }

}
