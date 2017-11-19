import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { Car } from './car';
import { ICar } from './icar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app works!';
  name = "Arif";
  fg = "#ffffff";
  bg = "#000000";
  starUrl = 'https://developer.mozilla.org/samples/cssref/images/starsolid.gif';
  upperCase: string= '';
  lowerCase: string = '';
  @ViewChild('input') inputBox;

  cars = [
  	new Car("id1","Benz",1975)
  ];

  icars:Array<ICar> = [
    {make: 'bmw', model: 'm3'},
    {make: 'porsche', model: '911'},
    {make: 'bmw', model: 'm3'},
    {make: 'ford', model: 'mustang'}
  ];

  showCar(event, car){
  	console.log('car name is ', car.name );
  	console.log('car id is ', event.target.parentElement.getAttribute('id') );
  }

  getReversed(str:string){
  	let revered = '';
  	for(let i = str.length-1;i>=0;i--){
  		revered += str.substring(i,i+1);
  	}
  	return revered;
  }

  deleteCar(car: ICar){
    alert('Deleting car:' + JSON.stringify(car)); 
  }
  
  textInput(event){
	this.upperCase = event.target.value.toUpperCase(); 
    this.lowerCase = event.target.value.toLowerCase();
  }
  ngAfterViewInt(){
  	this.inputBox.nativeElement.focus();
  }
}

