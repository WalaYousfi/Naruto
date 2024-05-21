import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-child-leaf',
  templateUrl: './input-child-leaf.component.html',
  styleUrl: './input-child-leaf.component.css'
})
export class InputChildLeafComponent {

  @Input() msg!: string;
  
}
