import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FlyHigh';
  dummyObj:any;
  constructor(private dsObj:DataService){

  }

  ngOnInit(){
    this.dsObj.getDataFrom().subscribe(
        data=>{
        this.dummyObj=data;
      },
      err=>{
        console.log("error in opening file is :",err);
      }
    )
  }
}
