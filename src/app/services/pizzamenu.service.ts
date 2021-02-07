import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {baseURL} from 'src/app/baseURL';
import { Pizza } from '../model/pizza';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PizzamenuService {

  constructor(private http:HttpClient, ) {}


  getPizza(): Observable<Pizza[]>{
      return this.http.get<Pizza[]>(baseURL + 'menu');
  }
}
