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
     
    return this.hc.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/",{
      "headers":{
        "x-rapidapi-key": "e29fd04656msh7642552026c43f8p15825ejsn6f1b79e56cf0",
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
      },
      params:{
        "query": "Stockholm Arlanda"
      }
    });
   }

}
