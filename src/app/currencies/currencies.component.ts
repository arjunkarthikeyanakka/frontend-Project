import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Observable, Subscriber } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { VERSION } from "@angular/core";


@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  
  currency=[]

  searchTerm : any;

  constructor(private dsObj:DataService,private hc:HttpClient ) {
    this.searchTerm = '' ;
  }


  ngOnInit(){
    this.dsObj.getDataFrom().subscribe(
      data=>{
        this.currency=data;
        console.log("data is extracted successfuly",typeof(this.currency[0]),this.currency[0]);
      },
      err=>{
        console.log("error while loading currencies data is :",err);
      }
    )
  }




}
