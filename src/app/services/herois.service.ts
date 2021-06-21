import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroiModel } from '../models/heroi.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroisService {
  
  private url = 'https://crud-82737-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }
  

  criarHeroi( heroi: HeroiModel ) {
      
    return this.http.post(`${this.url}/herois.json`, heroi)
      .pipe(
        map((resp: any) => {
          heroi.id = resp.name
          return heroi;
          })
        )

  }
}
