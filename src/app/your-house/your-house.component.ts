import { Component, Input } from '@angular/core';
import { YourHouse } from '../your-house';

@Component({
  selector: 'your-house',
  templateUrl: './your-house.component.html',
  styleUrl: './your-house.component.css',
})
export class YourHouseComponent {
  @Input() house!: YourHouse;
  //house is prop in an input decorator of type YouHouse(interface)
}
