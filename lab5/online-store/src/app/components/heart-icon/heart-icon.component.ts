import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-heart-icon',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './heart-icon.component.html',
  styleUrl: './heart-icon.component.css'
})
export class HeartIconComponent {
    @Input() additionalClass: string | undefined;

  onClickHeartIcon(){

  }
}
