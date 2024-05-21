import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrl: './output-child.component.css'
})
export class OutputChildComponent {

  msg: string = "hey there"

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit(this.msg);
  }

}
