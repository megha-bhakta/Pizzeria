import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Pizza } from 'src/app/model/pizza';
import { PizzamenuService } from 'src/app/services/pizzamenu.service';

@Component({
  selector: 'app-menudetails',
  templateUrl: './menudetails.component.html',
  styleUrls: ['./menudetails.component.css']
})
export class MenudetailsComponent implements OnInit {

  pizza:Pizza;
  vegId:string[];
  nonvegId:string[];
  constructor(private pizzamenuService:PizzamenuService,
              private activatedRoute: ActivatedRoute,
              @Inject('baseURL') public baseURL: string) { }

  ngOnInit() {
    this.pizzamenuService.getVegIds().subscribe(vegId => this.vegId= vegId);
    this.activatedRoute.params.pipe(switchMap((params: Params) => this.pizzamenuService.getVegPizzas(params['id'])))
    this.pizzamenuService.getNonVegIds().subscribe(nonvegId => this.nonvegId= nonvegId);
    this.activatedRoute.params.pipe(switchMap((params: Params) => this.pizzamenuService.getNonVegPizzas(params['id'])))
  }

}
