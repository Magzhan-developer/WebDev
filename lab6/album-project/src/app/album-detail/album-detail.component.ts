import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {PhotosInfoInterface} from "./photosInfoInterface";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album: any;
  isInputDisabled = false
  constructor(private router: Router, private route: ActivatedRoute,private _httpClient:HttpClient) {}
  albumTitle!:string;
  isSaveButtonShow:boolean=false;
  originalTitle!: string;

  BASE_URL = 'https://jsonplaceholder.typicode.com'
  photosInfo: PhotosInfoInterface | undefined;
  ngOnInit() {
    this.album = history.state.album;
    this.albumTitle = this.album.title;
    this.originalTitle = this.album.title;
    const pathnameArray = this.router.url.split('/')
    if(pathnameArray[pathnameArray.length - 1] === 'albums'){
      this.isInputDisabled = true
    }
  }

  onInputValueChange($event:any) {
    const inputValue = $event.target.value;
    this.isSaveButtonShow = inputValue !== this.originalTitle;
  }

  onSave($event:any){
    let LS_albumsList = localStorage.getItem('albumsList')
    LS_albumsList = LS_albumsList ? JSON.parse(LS_albumsList) : []
    // @ts-ignore
    const newArrayData = LS_albumsList.map(item => {
      if(item.id === this.album.id){
        return {...item,title:this.albumTitle}
      }
      return item
    })
    localStorage.setItem('albumsList',JSON.stringify(newArrayData))
    alert('Данные успешно сохранились!')
  }

  onReset(){
    let LS_albumsList = localStorage.getItem('albumsList')
    LS_albumsList = LS_albumsList ? JSON.parse(LS_albumsList) : []
    // @ts-ignore
    const newArrayData = LS_albumsList.map(item => {
      if(item.id === this.album.id){
        return {...item,title:this.originalTitle}
      }
      return item
    })
    localStorage.setItem('albumsList',JSON.stringify(newArrayData))
    alert('Данные успешно возвращены назад!')
  }

  goToPhoto() {
    this._httpClient.get<PhotosInfoInterface[]>(`${this.BASE_URL}/albums/${this.album.id}/photos`).subscribe(response => {
      if (response.length > 0) {
        window.location.href = response[0].thumbnailUrl;
      } else {
        alert("Фотографии не найдены!");
      }
    }, error => {
      console.error("Ошибка при получении фотографий:", error);
      alert("Не удалось загрузить фотографии.");
    });
  }
}
