import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
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
  @Input() productId!:number;
  @Output() removeProduct = new EventEmitter<number>();
  @Output()  likeToggled  = new EventEmitter<boolean>();
  status = false
  onClickProduct(){
    window.open(this.linkToTheProduct,"_blank")
  }

  changeLikeButton(){
    this.status = !this.status
    this.likeToggled.emit(this.status)
  }

  onRemoveProduct() {
    this.removeProduct.emit(this.productId);
  }

  onShareInTelegram(){
    window.open(`https://t.me/share/url?url=${this.linkToTheProduct}`,'_blank')
  }
}
