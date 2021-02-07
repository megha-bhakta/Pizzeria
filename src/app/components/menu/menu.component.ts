import { Component, Inject, OnInit } from '@angular/core';
import { Pizza} from 'src/app/model/pizza';
import { PizzamenuService} from 'src/app/services/pizzamenu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pizza : Pizza[];
  constructor(private menuService:PizzamenuService,
    @Inject('baseURL') public baseURL) { }

  ngOnInit(): void {
    this.menuService.getPizza().subscribe(pizza => this.pizza = pizza)
  }



  }

