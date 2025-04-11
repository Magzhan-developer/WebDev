import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterModule, RouterOutlet} from '@angular/router';
import {NgForOf} from "@angular/common";
import {Company, Vacancy} from "./interfaces";
import {Services} from "./services";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'hh-front';
  companies :Company[] | undefined
  vacancy : Vacancy[] | undefined
  constructor(private services:Services,
              private router:Router) {}
  ngOnInit() {
    this.services.getAllCompanies().subscribe(res => {
      this.companies = res.data
    })
  }

  onClickCard(id:number){
    this.services.getVacanciesByCompanyId(id).subscribe(res => {
      this.vacancy = res.data
    localStorage.setItem('vacancies',JSON.stringify(this.vacancy))
    this.router.navigate(['vacancies'])
    })
  }
}
