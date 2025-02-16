import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})
export class UserComponentComponent {
  @Input() textMessage = ''
  @Output() incrementCountEvent = new EventEmitter<number>()
  numberCount : number = 0;

  addNumberCount(){
    this.numberCount++;
    this.incrementCountEvent.emit(this.numberCount);
  }
}
