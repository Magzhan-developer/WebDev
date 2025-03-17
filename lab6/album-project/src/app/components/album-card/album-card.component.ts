import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {albumObject} from "../../albums/albumObject.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.css'
})
export class AlbumCardComponent implements OnInit{
  constructor(private router: Router) {}
    @Input() albumObject!:albumObject;
    userId!:number
    albumId!:number
    albumTitle =''
    isInputDisabled:boolean=false
    ngOnInit() {
      this.userId = this.albumObject.userId
      this.albumId = this.albumObject.id
      this.albumTitle = this.albumObject.title
      const pathnameArray = this.router.url.split('/')
      if(pathnameArray[pathnameArray.length - 1] === 'albums'){
       this.isInputDisabled = true
      }
    }



  goToDetailedPage(){
      this.router.navigate(['albums',this.albumId],{
        state: { album: { id: this.albumId, title: this.albumTitle, userId: this.userId } }
      })
  }
}
