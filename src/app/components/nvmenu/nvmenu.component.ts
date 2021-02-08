import { Component, Inject, OnInit } from '@angular/core';
import { Pizza } from 'src/app/model/pizza';
import { PizzamenuService } from 'src/app/services/pizzamenu.service';

@Component({
  selector: 'app-nvmenu',
  templateUrl: './nvmenu.component.html',
  styleUrls: ['./nvmenu.component.css']
})
export class NvmenuComponent implements OnInit {

  pizza : Pizza[];
  constructor(private menuService:PizzamenuService,
    @Inject('baseURL') public baseURL) { }

  ngOnInit(): void {
    this.menuService.getNonVegPizza().subscribe(pizza => this.pizza = pizza)
  }

}
