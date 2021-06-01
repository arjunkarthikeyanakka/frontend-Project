import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currency=[]

  constructor(private dsObj:DataService) { }

  ngOnInit(){
    this.dsObj.getDataFrom().subscribe(
      data=>{
        this.currency=data;
      },
      err=>{
        console.log("error while loading currencies data is :",err);
      }
    )
  }

}
