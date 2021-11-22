import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	
	//baseUrl:string = "https://cors-anywhere.herokuapp.com/https://www.api-football.com/demo/api/v2/";
  baseUrl:string = "https://api-football-v1.p.rapidapi.com/v2/";
  apiKey = "bd4ca8229dmshe5e7c2079127c06p1d4bd4jsndc1798d63de4";
  stats;

  constructor(private httpClient: HttpClient) { }

  public getStats(type, soustype="", soustypebis=""){
    type = type+"/";
    soustype = soustype+"/";
    soustypebis = soustypebis+"/";

    this.stats = this.httpClient.get(this.baseUrl+type+soustype+soustypebis, {
       headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': this.apiKey,
            'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS'
          })
     });
	 return this.stats;
 }
}
