import { Component, VERSION, OnInit } from '@angular/core';
import { Country } from './country';
import { COUNTRIES } from './country-data';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  public data:Country[]=COUNTRIES;
  mijs:any;
  public paisesNombre:any

  constructor(){
    this.mijs=JSON.stringify(this.data);
    console.log(this.mijs);
   


}
ngOnInit(){
    this.paisesNombre=this.data.map((dato:any)=>dato.name);
    console.log(this.paisesNombre)
}

}