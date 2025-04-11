import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {VacancyModalComponent} from "./vacancy-modal/vacancy-modal.component";

export const routes: Routes = [
  {
    path:'',
    component:AppComponent,
  },
  {
    path:'vacancies',
    component:VacancyModalComponent,
  }
];
