import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models';
const BASE_PATH = environment.baseHttpPath;

@Injectable({
   providedIn: 'root'
})
export class CategoriesService {
   categories$ = this.getCategories();

   constructor(private httpClient: HttpClient) { }

   getCategories(): Observable<Category[]> {
      return this.httpClient.get<Category[]>(`${BASE_PATH}/categories`);
   }
}
