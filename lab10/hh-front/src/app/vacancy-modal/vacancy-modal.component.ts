import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Vacancy} from "../interfaces";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-vacancy-modal',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './vacancy-modal.component.html',
  styleUrl: './vacancy-modal.component.css'
})
export class VacancyModalComponent implements OnInit{
  data: Vacancy[] | undefined;
  constructor(private router: Router) {}
  ngOnInit(): void {
    // @ts-ignore
    const vacancies = JSON.parse(localStorage.getItem('vacancies'))
    this.data = vacancies || []
  }
}
