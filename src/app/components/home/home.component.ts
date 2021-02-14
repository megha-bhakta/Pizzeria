import { Component, Inject, OnInit } from '@angular/core';
import { Pizza } from 'src/app/model/pizza';
import { PizzamenuService } from 'src/app/services/pizzamenu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pizza : Pizza;
  constructor( @Inject('baseURL') public baseURL: string,
                private pizzamenuService:PizzamenuService) { }

  ngOnInit(): void {
    this.pizzamenuService.getFeaturedPizza().subscribe(pizza => this.pizza = pizza);
  }

}
