import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {baseURL} from 'src/app/baseURL';
import { Pizza } from '../model/pizza';
import { HttpClient} from '@angular/common/http';
import { map} from'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PizzamenuService {

  constructor(private http:HttpClient, ) {}


  getVegPizza(): Observable<Pizza[]>{
      return this.http.get<Pizza[]>(baseURL + 'vegmenu');
  }

  getNonVegPizza(): Observable<Pizza[]>{
    return this.http.get<Pizza[]>(baseURL + 'nonvegmenu');
  }

  getVegPizzas(id:number): Observable<Pizza>{
    return this.http.get<Pizza>(baseURL + 'vegmenu/' + id);
  }

  getNonVegPizzas(id:number): Observable<Pizza>{
    return this.http.get<Pizza>(baseURL + 'nonvegmenu/' + id);
  }

  getVegIds(): Observable<number[] | any> {
    return this.getVegPizza().pipe(map(pizza => pizza.map(pizza => pizza.id)))
  }

  getNonVegIds(): Observable<number[] | any> {
    return this.getNonVegPizza().pipe(map(pizza => pizza.map(pizza => pizza.id)))
  }

  getFeaturedPizza(): Observable<Pizza> {
    return this.http.get<Pizza[]>(baseURL + 'pizza?featured=true').pipe(map(pizza => pizza[0]));
  }
}
