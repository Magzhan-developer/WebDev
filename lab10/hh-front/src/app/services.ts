import {HttpClient} from "@angular/common/http";
import {Company, Vacancy} from "./interfaces";
import {Injectable} from "@angular/core";

interface CompaniesResponse {
  code:string,
  data:Company[]
}

interface VacanciesResponse {
  code:string,
  data:Vacancy[]
}

@Injectable({
  providedIn:'root'
})
export class Services{
  constructor(private _httpClient:HttpClient) {
  }

  BASE_URL = 'http://127.0.0.1:8000/api/';

  getAllCompanies(){
    return this._httpClient.get<CompaniesResponse>(`${this.BASE_URL}companies`)
  }

  getVacanciesByCompanyId(id:number){
    return this._httpClient.get<VacanciesResponse>(`${this.BASE_URL}companies/${id}/vacancies`)
  }


}
