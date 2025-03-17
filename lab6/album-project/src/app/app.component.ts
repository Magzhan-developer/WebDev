import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {AlbumsComponent} from "./albums/albums.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlbumsComponent, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'album-project';
  isAlbumsRoute: boolean = false;
  constructor(private router:Router) {
  }
  ngOnInit() {
    this.isAlbumsRoute = this.router.url.includes('albums');

    // Следим за изменением маршрута
    this.router.events.subscribe(() => {
      this.isAlbumsRoute = this.router.url.includes('albums');
    });
  }

}
