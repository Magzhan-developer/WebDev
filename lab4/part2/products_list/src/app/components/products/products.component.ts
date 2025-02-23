import { Component } from '@angular/core';
import {ProductComponent} from "./product/product.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductComponent,
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {
      productImg:'/assets/images/logitectBlueHeadphones.jpg',
      productName:'Logitech G PRO X-Blue',
      productDescription:'Наушники',
      productRating:'5.0',
      linkToTheProduct:'https://kaspi.kz/shop/p/logitech-g-pro-x-blue-vo-ce-league-of-legends-edition-sinii-110522093/?c=750000000'
    },
    {
      productImg:'/assets/images/kreplenie.jpg',
      productName:'NB NB-H100 черный',
      productDescription:'Крепление для мониторов',
      productRating:'4.9',
      linkToTheProduct:'https://kaspi.kz/shop/p/nb-nb-h100-chernyi-111928961/?c=750000000'
    },
    {
      productImg:'/assets/images/macBook.jpg',
      productName:'Apple MacBook Pro 14 2024',
      productDescription:'Ноутбуки',
      productRating:'4.8',
      linkToTheProduct:'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-1000-gb-macos-mx2j3-132140673/?c=750000000'
    },
    {
      productImg:'/assets/images/xiaomiCamera.jpg',
      productName:'Xiaomi камера видеонаблюдения',
      productDescription:'Камеры видеонаблюдения',
      productRating:'4.7',
      linkToTheProduct:'https://kaspi.kz/shop/p/xiaomi-kamera-videonabljudenija-360-home-security-camera-2k-rasshirenie-2304x1296-100762278/?c=750000000'
    },
    {
      productImg:'/assets/images/pusco-zaryadnoe.jpg',
      productName:'Пуско-зарядное устройство',
      productDescription:'Зарядные и пуско-зарядные девайсы',
      productRating:'4.6',
      linkToTheProduct:'https://kaspi.kz/shop/p/pusko-zarjadnoe-ustroistvo-30324834-253773438-122945990/?c=750000000'
    },
    {
      productImg:'/assets/images/ajazzMouse.jpg',
      productName:'Ajazz AL159 APEX белый',
      productDescription:'Мыши',
      productRating:'4.5',
      linkToTheProduct:'https://kaspi.kz/shop/p/ajazz-aj159-apex-belyi-120936307/?c=750000000',
    },
    {
      productImg:'/assets/images/logitechMouse.jpg',
      productName:'Logitech G PRO Wireless черный',
      productDescription:'мыши',
      productRating:'4.4',
      linkToTheProduct:'https://kaspi.kz/shop/p/logitech-g-pro-wireless-chernyi-100348163/?c=750000000'
    },
    {
      productImg:'/assets/images/ps5.jpg',
      productName:'SONY PlayStation 5 белый',
      productDescription:'Игровые приставки',
      productRating:'4.3',
      linkToTheProduct:'https://kaspi.kz/shop/p/sony-playstation-5-belyi-geimpad-chernyi-101868190/?c=750000000'
    },
    {
      productImg:'/assets/images/watchDogsGame.jpg',
      productName:'Watch Dogs 2 PS4 ENG',
      productDescription:'Видеоигры',
      productRating:'4.2',
      linkToTheProduct:'https://kaspi.kz/shop/p/watch-dogs-2-ps4-eng-108905934/?c=750000000'
    },
    {
      productImg:'/assets/images/djiMicro.jpg',
      productName:'DJI Mic 2',
      productDescription:'Микрофоны',
      productRating:'4.1',
      linkToTheProduct:'https://kaspi.kz/shop/p/dji-mic-2-2-tx-1-rx-charging-case--123794780/?c=750000000',
    },
  ]

  sortState: boolean = false

  sort(){
    this.products = this.products.sort((a:any,b:any) => this.sortState ? a.productRating - b.productRating : b.productRating - a.productRating)
    this.sortState = !this.sortState
  }
}
