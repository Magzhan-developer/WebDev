import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {albumObject} from "./albumObject.interface";
import {AlbumCardComponent} from "../components/album-card/album-card.component";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    AlbumCardComponent, CommonModule, RouterOutlet],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  BASE_URL = 'https://jsonplaceholder.typicode.com'
  albumsList:albumObject[] = []
  constructor(private _httpClient: HttpClient,
              private route: ActivatedRoute) {}

    ngOnInit(){
      let LS_albumsList = localStorage.getItem('albumsList')
      if(LS_albumsList){
        this.albumsList = JSON.parse(LS_albumsList)
      }else{
        this._httpClient.get<albumObject[]>(`${this.BASE_URL}/albums`).subscribe(response=> {
          this.albumsList = response
          localStorage.setItem('albumsList',JSON.stringify(response))
        })
      }
    }

  isDetailView(): boolean {
    return this.route.snapshot.firstChild?.paramMap.has('albumId') ?? false;
  }
}
