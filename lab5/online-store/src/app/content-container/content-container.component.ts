import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {ProductItemComponent} from "../product-item/product-item.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-content-container',
  standalone: true,
  imports: [
    NgForOf,
    ProductItemComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './content-container.component.html',
  styleUrl: './content-container.component.css'
})
export class ContentContainerComponent {
  data = {
    phones:[
      {
        productImg:'/assets/images/phones/iphone13.jpg',
        productName:'Смартфон Apple iPhone 13 128Gb черный',
        productDescription:'Смартфоны',
        productRating:'5.0',
        linkToTheProduct:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
        ,productId:1
      },
      {
        productImg:'/assets/images/phones/iphone16.jpeg',
        productName:'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
        productDescription:'Смартфоны',
        productRating:'4.9',
        linkToTheProduct:'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
        ,productId:2
      },
      {
        productImg:'/assets/images/phones/xiaomi.jpg',
        productName:'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
        productDescription:'Смартфоны',
        productRating:'4.8',
        linkToTheProduct:'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000'
        ,productId:3
      },
      {
        productImg:'/assets/images/phones/samsungA55.jpeg',
        productName:'Смартфон Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий',
        productDescription:'Смартфоны',
        productRating:'4.7',
        linkToTheProduct:'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000'
        ,productId:4
      },
      {
        productImg:'/assets/images/phones/iphone15.jpg',
        productName:'Смартфон Apple iPhone 15 128Gb голубой',
        productDescription:'Смартфоны',
        productRating:'5.0',
        linkToTheProduct:'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000'
        ,productId:5
      },
    ],
    pcs:[
      {
        productImg:'/assets/images/pcs/lineUpPc.jpg',
        productName:'LINEUP i5-12400F/ RTX 4060/ 32GB/ SSD 1024 Гб/ Win 11 Pro',
        productDescription:'Компьютеры',
        productRating:'5.0',
        linkToTheProduct:'https://kaspi.kz/shop/p/lineup-newcomponents2-chernyi-114538061/?c=750000000',
        productId:6
      },
      {
        productImg:'/assets/images/pcs/itMr.jpeg',
        productName:'Системный блок IT-MR i5-12400F/ RTX 4060/ 32GB/ 1000 GB SSD/ Win 11 Pro',
        productDescription:'Компьютеры',
        productRating:'4.9',
        linkToTheProduct:'https://kaspi.kz/shop/p/it-mr-i5-12400f-rtx-4060-32gb-1000-gb-ssd-win-11-pro-122143802/?c=750000000'
        ,productId:7
      },
      {
        productImg:'/assets/images/pcs/empireComp.jpg',
        productName:'Системный блок Empire Computers i5-10400F/ GTX 1660 Super/ 16GB/ 512 GB SSD/ Win 10',
        productDescription:'Компьютеры',
        productRating:'4.8',
        linkToTheProduct:'https://kaspi.kz/shop/p/empire-computers-i5-10400f-gtx-1660-super-16gb-512-gb-ssd-win-10-108560461/?c=750000000'
        ,productId:8
      },
      {
        productImg:'/assets/images/pcs/rockstar.jpg',
        productName:'Системный блок ROCKSTAR_GAMING i5-10400F/ GTX 1660 Super/ 32GB/ 1000 GB SSD/ Win 10',
        productDescription:'Компьютеры',
        productRating:'4.7',
        linkToTheProduct:'https://kaspi.kz/shop/p/rockstar-gaming-i5-10400f-gtx-1660-super-32gb-1000-gb-ssd-win-10-117849098/?c=750000000'
        ,productId:9
      },
      {
        productImg:'/assets/images/pcs/bestGamer.jpg',
        productName:'Системный блок BestGamer 064 i5-12400F/ RTX 4060/ 32GB/ SSD 1000 Гб/ Win 11 Pro',
        productDescription:'Компьютеры',
        productRating:'4.6',
        linkToTheProduct:'https://kaspi.kz/shop/p/bestgamer-064-i5-12400f-rtx-4060-32gb-ssd-1000-gb-win-11-pro-120175484/?c=750000000'
        ,productId:10
      },
    ],
    tvs:[
      {
        productImg:'/assets/images/tvs/yasin.jpg',
        productName:'Телевизор Yasin 43G11 109 см черный',
        productDescription:'Телевизоры',
        productRating:'5.0',
        linkToTheProduct:'https://kaspi.kz/shop/p/yasin-43g11-109-sm-chernyi-108494502/?c=750000000'
        ,productId:11
      },
      {
        productImg:'/assets/images/tvs/samsungTv.jpg',
        productName:'Телевизор Samsung UE43T5300AUXCE 109 см черный',
        productDescription:'Телевизоры',
        productRating:'4.9',
        linkToTheProduct:'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000'
        ,productId:12
      },
      {
        productImg:'/assets/images/tvs/lgTv.jpg',
        productName:'Телевизор LG 43LM5772PLA 109 см черный',
        productDescription:'Телевизоры',
        productRating:'4.8',
        linkToTheProduct:'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000'
        ,productId:13
      },
      {
        productImg:'/assets/images/tvs/yandexTv.jpg',
        productName:'Телевизор Яндекс YNDX-00075 127 см черный',
        productDescription:'Телевизоры',
        productRating:'4.7',
        linkToTheProduct:'https://kaspi.kz/shop/p/jandeks-yndx-00075-127-sm-chernyi-131893133/?c=750000000'
        ,productId:14
      },
      {
        productImg:'/assets/images/tvs/smartTv.jpg',
        productName:'Телевизор SMART QUA32QX2AAJXXZ 81 см черный',
        productDescription:'Телевизоры',
        productRating:'4.6',
        linkToTheProduct:'https://kaspi.kz/shop/p/smart-qua32qx2aajxxz-81-sm-chernyi-117403264/?c=750000000'
        ,productId:15
      },
    ],
    headphones:[
      {
        productImg:'/assets/images/headphones/airpodsPro2.jpg',
        productName:'Наушники Apple AirPods Pro 2 with Type-C/Wireless Charging белый',
        productDescription:'Наушники',
        productRating:'5.0',
        linkToTheProduct:'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000'
        ,productId:16
      },
      {
        productImg:'/assets/images/headphones/newest.jpg',
        productName:'Наушники Newest M10 Newest черный',
        productDescription:'Наушники',
        productRating:'4.9',
        linkToTheProduct:'https://kaspi.kz/shop/p/newest-m10-newest-chernyi-102272027/?c=750000000'
        ,productId:17
      },
      {
        productImg:'/assets/images/headphones/hydra.jpg',
        productName:'Наушники HYDRA Minor черный',
        productDescription:'Наушники',
        productRating:'4.8',
        linkToTheProduct:'https://kaspi.kz/shop/p/hydra-minor-chernyi-120724113/?c=750000000'
        ,productId:18
      },
      {
        productImg:'/assets/images/headphones/marshall.jpg',
        productName:'Наушники Marshall Major IV черный',
        productDescription:'Наушники',
        productRating:'4.7',
        linkToTheProduct:'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000'
        ,productId:19
      },
      {
        productImg:'/assets/images/headphones/jbl.jpg',
        productName:'Наушники JBL Tune 510BT черный',
        productDescription:'Наушники',
        productRating:'4.6',
        linkToTheProduct:'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000'
        ,productId:20
      },
    ],
    all:[]
  }
  selectedCategory:'all' | 'phones' | 'pcs' | 'tvs' | 'headphones'  = 'all'
  totalLikesNumber = 0
  categories = [
    {
      categoryRuName:'Все',
      categoryCode:'all'
    },
    {
      categoryRuName:'Смартфоны',
      categoryCode:'phones'
    },
    {
      categoryRuName:'Компьютеры',
      categoryCode:'pcs'
    },
    {
      categoryRuName:'Телевизоры',
      categoryCode:'tvs'
    },
    {
      categoryRuName:'Наушники',
      categoryCode:'headphones'
    },
  ]

  constructor() {
    // @ts-ignore
    this.data.all = [
      ...this.data.phones,
      ...this.data.pcs,
      ...this.data.tvs,
      ...this.data.headphones
    ];
  }
  productRemover(productId: number) {
     Object.keys(this.data).forEach((category) => {
       console.log('im here')
       const key = category as keyof typeof this.data; // Приведение типа ключа
       if (Array.isArray(this.data[key])) {
         (this.data as any)[key] = this.data[key].filter(
           (item: { productId: number }) => item.productId !== productId
         );
       }
     });

  }

  updateLikes(status:boolean){
    if(status){
      this.totalLikesNumber += 1
    }else{
      if(this.totalLikesNumber > 0){
        this.totalLikesNumber -= 1
      }
    }
  }
}
