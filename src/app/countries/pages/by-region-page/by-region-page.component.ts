import { Component } from '@angular/core';
import { Country } from '../../interfaces/conuntry';
import { CountriesService } from '../../service/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {

public countries: Country[] = [];

constructor(private countriesService: CountriesService){ }


searchByRegion(term: string){
  this.countriesService.searchRegion(term).subscribe(res=>{
    this.countries = res;
  })
}



}
