import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../interfaces/conuntry';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent {

  public country?:Country;

  constructor(private activatedRoute: ActivatedRoute, private countriesService: CountriesService, private router:Router){

    this.activatedRoute.params.subscribe(({id}) =>{

      this.countriesService.searchCountryById(id).subscribe(country =>{
        if(!country){
          return this.router.navigateByUrl('');
        }

        return this.country = country;
      })

    });
  }



}
