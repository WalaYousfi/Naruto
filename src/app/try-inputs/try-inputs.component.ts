import { Component } from '@angular/core';
import { YourHouse } from '../your-house';


@Component({
  selector: 'try-inputs',
  templateUrl: './try-inputs.component.html',
  styleUrl: './try-inputs.component.css'
})
export class TryInputsComponent {

  show:boolean ;

  constructor(){
    this.show=false;
  }

  display(){
    this.show=true;
  }

  log(x:any){console.log(x)}

  List: YourHouse[]= [
{
      "id": 1,
      "photo": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "cost": "$900"
    },
    {
      "id": 2,
      "photo": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "cost": "$900"
    },
    {
      "id": 3,
      "photo": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "cost": "$900"
    },
    {
      "id": 4,
      "photo": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "cost": "$900"
    },
    {
      "id": 5,
      "photo": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "cost": "$900"
    },
    {
      "id": 6,
      "photo": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "cost": "$900"
    },
  ];



}
