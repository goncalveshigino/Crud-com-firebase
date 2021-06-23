import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroiModel } from '../models/heroi.model';
import { map,delay } from 'rxjs/operators'

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
      );
  }


  //Atualizar
  atualizarHeroi(heroi: HeroiModel) {

    interface HeroiTemp {
       id   ?: string;
       nome ?: string;
       poder?: string;
       vivo ?: boolean
    }

     const heroiTemp: HeroiTemp = {
      ...heroi
     };
    
    delete heroiTemp.id;

    return this.http.put(` ${this.url }/herois/${ heroi.id }.json`, heroiTemp);
    
  } 
 
  //Pegar todos herois
  getHerois() {
    return this.http.get(`${this.url}/herois.json`)
      .pipe(
        map(this.criarArreglo),
      );
  }

  //Para atualizar uma heroi
  getHeroi(id: string) {
    return this.http.get(`${ this.url }/herois/${ id }.json`)
  }
  
    private criarArreglo( heroiObj: object ) {

    const herois: HeroiModel[] = [];

    Object.keys( heroiObj ).forEach( key => {

      const heroi: HeroiModel = heroiObj[key];
      heroi.id = key;

      herois.push( heroi );
    });

    return herois;

    }
  
  
    
}
