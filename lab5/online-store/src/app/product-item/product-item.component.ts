import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    NgForOf,
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() productName = ''
  @Input() productDescription = ''
  @Input() productRating = ''
  @Input() productImg = ''
  @Input() linkToTheProduct = ''
  onClickProduct(){
    window.open(this.linkToTheProduct,"_blank")
  }

  onShareInTelegram(){
    window.open(`https://t.me/share/url?url=${this.linkToTheProduct}`,'_blank')
  }
}
