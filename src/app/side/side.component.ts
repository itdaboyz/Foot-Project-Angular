import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { EventEmitterService } from '../event-emitter.service'; 

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
	
	countries;
  leagues = [];
  clicked;
  wantedCountries = [
  {code: "DZ"},{code: "DE"},{code: "AR"},{code: "GB"},{code: "AU"},{code: "AT"},{code: "BE"},{code: "BY"},{code: "BR"},{code: "BG"},{code: "CL"},
  {code: "CN"},{code: "KR"},{code: "HR"},{code: "DK"},{code: "ES"},{code: "FI"},{code: "FR"},{code: "GR"},
  {code: "HU"},{code: "IE"},{code: "IS"},{code: "IT"},{code: "JP"},{code: "KZ"},{code: "LT"},{code: "MY"},{code: "MA"},{code: "ME"},{code: "NO"},{code: "NL"},{code: "PL"},
  {code: "PT"},{code: "CZ"},{code: "RO"},{code: "RU"},{code: "RS"},{code: "SK"},{code: "SI"},{code: "SE"},{code: "CH"},{code: "TN"},{code: "TR"},{code: "UA"},{code: "US"}
  ];/*
  "DZ", "DE", "AR", "GB", "AU", "AT", "BE", "BY", "BR", "BG", "CL",
  "CN", "KR", "HR", "DK", "ES", "FI", "FR", "GR",
  "HU", "IE", "IS", "IT", "JP", "KZ", "LT", "MY", "MA", "ME", "NO", "NL", "PL",
  "PT", "CZ", "RO", "RU", "RS", "SK", "SI", "SE", "CH", "TN", "TR", "UA", "US"*/
  /* GB = England & Scotland & Wales */

  constructor(private apiService: ApiService, private eventEmitterService: EventEmitterService ) { }

  ngOnInit() {
	  this.apiService.getStats("countries").subscribe((data)=>{
      this.countries = data['api']['countries'];
      this.countries = this.countries.filter(ar => this.wantedCountries.find(wc => (wc.code === ar.code)));
    });
  }

  loadLeagues(country){
    if (!this.leagues[country]){
      this.apiService.getStats("leagues", "country", country).subscribe((data)=>{
        this.leagues[country] = data['api']['leagues'];
      });
    }
   }

   loadTeams(id, country, leagueName){
    let name = country + " > " + leagueName;
    this.eventEmitterService.onLoadMiddleFrame(id, name);
    this.clicked = id;
   }
}
