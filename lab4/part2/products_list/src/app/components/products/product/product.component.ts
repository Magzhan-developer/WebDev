import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
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
