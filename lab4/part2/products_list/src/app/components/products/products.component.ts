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
      productImg:'../../assets/images/Logitech%20G%20PRO%20X-Blue.webp',
      productName:'Logitech G PRO X-Blue',
      productDescription:'Наушники',
      productRating:'5.0'
    },
    {
      productImg:'../../assets/images/NB%20NB-H100%20черный.webp',
      productName:'NB NB-H100 черный',
      productDescription:'Крепление для мониторов',
      productRating:'4.9'
    },
    {
      productImg:'../../assets/images/Apple MacBook Pro 14 2024.webp',
      productName:'Apple MacBook Pro 14 2024',
      productDescription:'Ноутбуки',
      productRating:'5.0'
    },
    {
      productImg:'../../assets/images/Xiaomi камера видеонаблюдения.webp',
      productName:'Xiaomi камера видеонаблюдения',
      productDescription:'Камеры видеонаблюдения',
      productRating:'4.8'
    },
    {
      productImg:'../../assets/images/Пуско-зарядное устройство.webp',
      productName:'Пуско-зарядное устройство',
      productDescription:'Зарядные и пуско-зарядные девайсы',
      productRating:'4.0'
    },
    {
      productImg:'../../assets/images/Ajazz AL159 APEX белый.webp',
      productName:'Ajazz AL159 APEX белый',
      productDescription:'Мыши',
      productRating:'4.9'
    },
    {
      productImg:'../../assets/images/Logitech G PRO Wireless черный.jpg',
      productName:'Logitech G PRO Wireless черный',
      productDescription:'мыши',
      productRating:'5.0'
    },
    {
      productImg:'../../assets/images/SONY PlayStation 5 белый.jpg',
      productName:'SONY PlayStation 5 белый',
      productDescription:'Игровые приставки',
      productRating:'5.0'
    },
    {
      productImg:'../../assets/images/Watch Dogs 2 PS4 ENG.avif',
      productName:'Watch Dogs 2 PS4 ENG',
      productDescription:'Видеоигры',
      productRating:'4.0'
    },
    {
      productImg:'../../assets/images/DJI Mic 2.webp',
      productName:'DJI Mic 2',
      productDescription:'Микрофоны',
      productRating:'5.0'
    },
  ]
}
