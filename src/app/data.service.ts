import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) {
  
  }

   getDataFrom():Observable<any>{

    return this.hc.get("https://aviation-reference-data.p.rapidapi.com/countries",{
      headers:{
        "x-rapidapi-key": "e29fd04656msh7642552026c43f8p15825ejsn6f1b79e56cf0",
	      "x-rapidapi-host": "aviation-reference-data.p.rapidapi.com"
      }

    });
   }

}
