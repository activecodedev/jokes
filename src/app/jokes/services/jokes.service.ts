import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Joke } from '../models';
import { JokeDto } from '../models/joke-dto.model';
const BASE_PATH = environment.baseHttpPath;

@Injectable({
   providedIn: 'root'
})
export class JokesService {
   jokes$ = this.getJokes();
   
   constructor(private httpClient: HttpClient) { }

   getJokes(): Observable<Joke[]> {
      return this.httpClient.get<Joke[]>(`${BASE_PATH}/jokes?_expand=category`);
   }

   createJoke(jokeDto: JokeDto) {
      return this.httpClient.post<JokeDto>(`${BASE_PATH}/jokes`, jokeDto);
   }

   deleteJoke(jokeId: string) {
      return this.httpClient.delete(`${BASE_PATH}/jokes/${jokeId}`);
   } 
}
