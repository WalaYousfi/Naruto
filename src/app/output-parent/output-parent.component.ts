import { Component } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrl: './output-parent.component.css'
})
export class OutputParentComponent {

  message= "message received"

  receiveMessage($event: string){
    this.message= $event;
  }

}
